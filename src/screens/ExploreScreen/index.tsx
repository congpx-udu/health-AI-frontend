import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '@/components/Button';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

import { styles } from './styles';

const ExploreScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <ThemedText type="title">Explore</ThemedText>
        <ThemedText themeColor="textSecondary">
          Màn hình mẫu thứ hai. Thêm screen mới bằng cách tạo folder trong src/screens và một route trong src/app.
        </ThemedText>
        <Button title="Ví dụ Button" onPress={() => {}} />
      </SafeAreaView>
    </ThemedView>
  );
};

export default ExploreScreen;
