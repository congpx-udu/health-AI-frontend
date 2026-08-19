import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { SidebarIcon } from '@/screens/HealthHomeScreen/components/AppIcons';
import { s } from '@/utils/scale';

import ScanPortIcon from '../ScanPortIcon';
import { styles } from './styles';

const ChatHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable style={styles.menuButton} hitSlop={8} onPress={() => router.back()}>
          <SidebarIcon size={s(18)} />
        </Pressable>

        <Text style={styles.title} numberOfLines={1}>
          Health AI Agent
        </Text>

        <Pressable style={styles.scanButton} hitSlop={6} onPress={() => router.push('/scan')}>
          <ScanPortIcon size={s(39)} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatHeader;
