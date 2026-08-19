import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ThemedView from '@/components/ThemedView';

import FeatureCard from './components/FeatureCard';
import Header from './components/Header';
import { styles } from './styles';

const FEATURES = [
  { id: '1', title: 'Expo Router', description: 'Điều hướng dựa trên file trong src/app.' },
  { id: '2', title: 'TypeScript', description: 'Type-safe toàn bộ codebase với strict mode.' },
  { id: '3', title: 'Dark mode', description: 'Tự động theo theme hệ thống qua useTheme().' },
];

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header title="Base App" subtitle="React Native + Expo starter" />
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} title={feature.title} description={feature.description} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default HomeScreen;
