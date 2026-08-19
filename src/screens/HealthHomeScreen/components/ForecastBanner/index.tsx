import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, View } from 'react-native';

import { Palette } from '@/constants/theme';

import { styles } from './styles';

const ForecastBanner = () => {
  return (
    <Pressable>
      <LinearGradient
        colors={Palette.bannerGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}>
        <Text style={styles.title}>Xem dự báo sức khỏe tương lai của bạn</Text>
        <View style={styles.iconWrap}>
          <Ionicons name="document-text-outline" size={22} color={Palette.onPrimary} />
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ForecastBanner;
