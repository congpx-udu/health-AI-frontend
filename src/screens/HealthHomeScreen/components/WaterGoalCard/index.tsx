import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

import { Palette } from '@/constants/theme';

import { styles } from './styles';

const WaterGoalCard = () => {
  return (
    <LinearGradient
      colors={Palette.waterGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <Ionicons name="water" size={22} color={Palette.onPrimary} />

      <View style={styles.body}>
        <Text style={styles.title}>Mục tiêu Nước</Text>
        <Text style={styles.subtitle}>Điều chỉnh theo hoạt động dự kiến</Text>
        <Text style={styles.value}>2.8L</Text>
      </View>

      <View style={styles.track}>
        <View style={styles.fill} />
      </View>
    </LinearGradient>
  );
};

export default WaterGoalCard;
