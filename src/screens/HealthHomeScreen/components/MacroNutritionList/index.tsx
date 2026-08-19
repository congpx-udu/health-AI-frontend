import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Palette } from '@/constants/theme';

import { styles } from './styles';

type FoodItem = {
  id: string;
  title: string;
  subtitle: string;
  calories: string;
  unit: string;
  /** Món có ảnh minh họa + chỉ báo carousel (theo mockup) */
  photo?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
};

type Meal = {
  id: string;
  name: string;
  total: string;
  items: FoodItem[];
};

const MEALS: Meal[] = [
  {
    id: 'breakfast',
    name: 'Bữa sáng',
    total: '342 KCAL',
    items: [
      {
        id: 'coffee',
        icon: 'cafe-outline',
        title: 'Cà phê đen',
        subtitle: '08:45 AM • 1 cốc',
        calories: '5',
        unit: 'KCAL',
      },
      {
        id: 'oat',
        icon: 'nutrition-outline',
        title: 'Cháo yến mạch việt quất',
        subtitle: '08:30 AM • 350g',
        calories: '285',
        unit: 'KCAL',
      },
      {
        id: 'greens',
        photo: '🥗',
        title: 'Tô Rau Xanh Năng lượng',
        subtitle: 'Đạm cao • Ít thịt',
        calories: '580',
        unit: 'kcal',
      },
      {
        id: 'refuel',
        photo: '🍝',
        title: 'Nhiên liệu Sau chạy',
        subtitle: 'Phục hồi Cân bằng',
        calories: '720',
        unit: 'kcal',
      },
    ],
  },
  {
    id: 'lunch',
    name: 'Bữa trưa',
    total: '638 KCAL',
    items: [
      {
        id: 'caesar',
        icon: 'fast-food-outline',
        title: 'Salad Caesar gà nướng',
        subtitle: '12:45 PM • 1 phần',
        calories: '420',
        unit: 'KCAL',
      },
      {
        id: 'whey',
        icon: 'wine-outline',
        title: 'Sữa Whey Protein',
        subtitle: '01:15 PM • Vani',
        calories: '218',
        unit: 'KCAL',
      },
    ],
  },
];

const Dots = () => (
  <View style={styles.dots}>
    {[0, 1, 2].map((dot) => (
      <View key={dot} style={[styles.dot, dot === 0 && styles.dotActive]} />
    ))}
  </View>
);

const MacroNutritionList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleGroup}>
          <Ionicons name="restaurant-outline" size={13} color={Palette.textMuted} />
          <Text style={styles.sectionTitle}>DINH DƯỠNG ĐA LƯỢNG</Text>
        </View>
        <View style={styles.remainingBadge}>
          <Text style={styles.remainingLabel}>Còn lại 2,450 kcal</Text>
        </View>
      </View>

      {MEALS.map((meal) => (
        <View key={meal.id} style={styles.meal}>
          <View style={styles.mealHeader}>
            <View style={styles.sectionTitleGroup}>
              <Ionicons name="restaurant" size={12} color={Palette.textSecondary} />
              <Text style={styles.mealName}>{meal.name}</Text>
            </View>
            <View style={styles.totalBadge}>
              <Text style={styles.totalLabel}>{meal.total}</Text>
            </View>
          </View>

          {meal.items.map((item) => (
            <View key={item.id} style={styles.row}>
              {item.photo ? (
                <View style={styles.photo}>
                  <Text style={styles.photoEmoji}>{item.photo}</Text>
                </View>
              ) : (
                <View style={styles.iconBox}>
                  <Ionicons name={item.icon ?? 'ellipse-outline'} size={16} color={Palette.textSecondary} />
                </View>
              )}

              <View style={styles.rowBody}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
              </View>

              <View style={styles.rowRight}>
                {item.photo ? (
                  <>
                    <Text style={styles.photoCalories}>
                      {item.calories} {item.unit}
                    </Text>
                    <Dots />
                  </>
                ) : (
                  <>
                    <Text style={styles.calories}>{item.calories}</Text>
                    <Text style={styles.caloriesUnit}>{item.unit}</Text>
                  </>
                )}
              </View>
            </View>
          ))}
        </View>
      ))}

      <View style={styles.workoutRow}>
        <View style={styles.workoutIcon}>
          <Ionicons name="walk" size={16} color={Palette.primary} />
        </View>
        <View style={styles.rowBody}>
          <Text style={styles.workoutTitle}>Chạy bộ buổi chiều</Text>
          <Text style={styles.rowSubtitle}>4.2 km • 28 phút • Aerobic</Text>
        </View>
        <View style={styles.rowRight}>
          <Text style={styles.workoutCalories}>-240</Text>
          <Text style={styles.workoutUnit}>KCAL</Text>
        </View>
      </View>
    </View>
  );
};

export default MacroNutritionList;
