import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

import { styles } from './styles';

const DESCRIPTION =
  'Kết nối ngay với các chuyên gia dinh dưỡng, bác sĩ thể thao và huấn luyện viên cá nhân ' +
  'để nhận lộ trình chăm sóc sức khỏe được cá nhân hóa theo dữ liệu của bạn.';

const ExpertBookingCard = () => {
  return (
    <LinearGradient
      colors={Palette.cardGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Chuyên gia sức khỏe</Text>
        <Text style={styles.description} numberOfLines={3}>
          {DESCRIPTION}
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>Đặt lịch ngay</Text>
          <Ionicons name="calendar-outline" size={13} color={Palette.textPrimary} />
        </Pressable>
      </View>

      {/* Ảnh bác sĩ — thay bằng <Image source={...} /> khi có asset thật */}
      <View style={styles.avatar}>
        <Ionicons name="woman" size={s(52)} color={Palette.onPrimary} />
        <View style={styles.avatarBadge}>
          <Ionicons name="medkit" size={11} color={Palette.primary} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ExpertBookingCard;
