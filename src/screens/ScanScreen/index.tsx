import { Ionicons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { MI_QUANG_RESULT } from '@/constants/mockScanResult';
import { scanFood } from '@/services/foodApi';
import { styles } from './styles';

export default function ScanScreen() {
  const router = useRouter();
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(false);

  const handleScan = async () => {
    if (scanning) return;
    setScanning(true);
    try {
      const photo = await cameraRef.current?.takePictureAsync({ quality: 0.7 });
      if (!photo?.uri) throw new Error('Không chụp được ảnh');

      // Gửi ảnh lên backend FastAPI để nhận diện + lấy thông tin dinh dưỡng
      const result = await scanFood(photo.uri);
      router.push({ pathname: '/result', params: { food: JSON.stringify(result.food) } });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (Platform.OS === 'web') {
        // eslint-disable-next-line no-alert
        alert(`Không quét được: ${message}\nKiểm tra backend đã chạy ở cổng 8000 chưa.`);
      } else {
        Alert.alert('Không quét được', `${message}\nKiểm tra backend đã chạy ở cổng 8000 chưa.`);
      }
    } finally {
      setScanning(false);
    }
  };

  const hasCamera = permission?.granted;

  return (
    <View style={styles.container}>
      {hasCamera ? (
        <CameraView ref={cameraRef} style={styles.camera} facing="back" />
      ) : (
        // Chưa có quyền camera: dùng ảnh mẫu làm khung xem trước
        <Image source={MI_QUANG_RESULT.image} style={styles.camera} resizeMode="cover" />
      )}

      {/* Khung ngắm quét */}
      <View pointerEvents="none" style={styles.overlay}>
        <View style={styles.frame}>
          <View style={[styles.corner, styles.tl]} />
          <View style={[styles.corner, styles.tr]} />
          <View style={[styles.corner, styles.bl]} />
          <View style={[styles.corner, styles.br]} />
        </View>
        <Text style={styles.hint}>
          {scanning ? 'Đang phân tích món ăn...' : 'Đưa món ăn vào khung để quét'}
        </Text>
      </View>

      {!hasCamera && (
        <Pressable style={styles.permissionBtn} onPress={requestPermission}>
          <Text style={styles.permissionText}>Cấp quyền camera</Text>
        </Pressable>
      )}

      {/* Nút chụp */}
      <View style={styles.bottomBar}>
        <Pressable
          style={styles.captureBtn}
          onPress={handleScan}
          disabled={scanning || !hasCamera}>
          {scanning ? (
            <ActivityIndicator color="#fff" size="large" />
          ) : (
            <Ionicons name="scan" size={32} color="#fff" />
          )}
        </Pressable>
      </View>
    </View>
  );
}
