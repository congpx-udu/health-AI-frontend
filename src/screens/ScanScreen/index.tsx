import { Ionicons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { MI_QUANG_RESULT } from '@/constants/mockScanResult';
import { styles } from './styles';

export default function ScanScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    if (scanning) return;
    setScanning(true);
    // Giả lập AI phân tích ảnh trong 1.5s rồi mở màn kết quả
    setTimeout(() => {
      setScanning(false);
      router.push('/result');
    }, 1500);
  };

  const hasCamera = permission?.granted;

  return (
    <View style={styles.container}>
      {hasCamera ? (
        <CameraView style={styles.camera} facing="back" />
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
        <Pressable style={styles.captureBtn} onPress={handleScan} disabled={scanning}>
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
