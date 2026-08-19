import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { Palette } from '@/constants/theme';

import { styles } from './styles';

const ACTIONS = ['notifications-outline', 'happy-outline', 'settings-outline'] as const;

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.titleGroup}>
          <Ionicons name="heart-outline" size={20} color={Palette.primary} />
          <Text style={styles.title}>Trang chủ</Text>
        </View>

        <View style={styles.actions}>
          {ACTIONS.map((name) => (
            <Pressable key={name} style={styles.actionButton} hitSlop={6}>
              <Ionicons name={name} size={18} color={Palette.textPrimary} />
            </Pressable>
          ))}
        </View>
      </View>

      <Text style={styles.subtitle}>HỆ THỐNG CHÍNH XÁC V2.4</Text>
    </View>
  );
};

export default HomeHeader;
