import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import ActivityPlanList from './components/ActivityPlanList';
import AiTipBubble from './components/AiTipBubble';
import BodyModelHero from './components/BodyModelHero';
import CalorieRingCard from './components/CalorieRingCard';
import ExpertBookingCard from './components/ExpertBookingCard';
import ForecastBanner from './components/ForecastBanner';
import HomeHeader from './components/HomeHeader';
import HomeTabBar from './components/HomeTabBar';
import MacroNutritionList from './components/MacroNutritionList';
import NutritionIndexCard from './components/NutritionIndexCard';
import SectionHeader from './components/SectionHeader';
import WaterGoalCard from './components/WaterGoalCard';
import { styles } from './styles';

const HealthHomeScreen = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <BodyModelHero />

        <View style={styles.section}>
          <ForecastBanner />

          <SectionHeader title="Đặt lịch" />
          <ExpertBookingCard />

          <SectionHeader
            title="Hoạt động hôm nay"
            actionLabel="Thêm mới"
            onActionPress={() => router.push('/scan')}
          />
          <CalorieRingCard />
          <NutritionIndexCard />

          <AiTipBubble />
          <WaterGoalCard />

          <ActivityPlanList />
          <MacroNutritionList />
        </View>
      </ScrollView>

      <View style={{ paddingBottom: insets.bottom || 10 }}>
        <HomeTabBar />
      </View>
    </SafeAreaView>
  );
};

export default HealthHomeScreen;
