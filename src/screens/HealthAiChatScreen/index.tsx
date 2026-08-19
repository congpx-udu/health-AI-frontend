import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeTabBar from '@/screens/HealthHomeScreen/components/HomeTabBar';

import ChatHeader from './components/ChatHeader';
import ChatInputBar from './components/ChatInputBar';
import WaitingState from './components/WaitingState';
import { styles } from './styles';

const HealthAiChatScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ChatHeader />

      <View style={styles.body}>
        <WaitingState />
      </View>

      <ChatInputBar />

      <View style={{ paddingBottom: insets.bottom || 10 }}>
        <HomeTabBar activeTab="assistant" />
      </View>
    </SafeAreaView>
  );
};

export default HealthAiChatScreen;
