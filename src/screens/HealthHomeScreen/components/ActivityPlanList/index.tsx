import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { Palette } from '@/constants/theme';

import { styles } from './styles';

type Plan = {
  id: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  iconColor: string;
  title: string;
  subtitle: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  metaIcon: React.ComponentProps<typeof Ionicons>['name'];
  meta: string;
};

const PLANS: Plan[] = [
  {
    id: 'run',
    icon: 'walk',
    iconColor: Palette.primary,
    title: 'Chạy ngưỡng Zone 4',
    subtitle: '45 phút • Ước tính 540 kcal',
    tag: 'Cường độ cao',
    tagBg: Palette.tagNeutralBg,
    tagColor: Palette.tagNeutralText,
    metaIcon: 'time-outline',
    meta: 'Tốt nhất lúc 17:30',
  },
  {
    id: 'stretch',
    icon: 'body',
    iconColor: Palette.tagRecoveryText,
    title: 'Dãn cơ linh hoạt',
    subtitle: '15 phút • Sau tập luyện',
    tag: 'Phục hồi',
    tagBg: Palette.tagRecoveryBg,
    tagColor: Palette.tagRecoveryText,
    metaIcon: 'trending-down-outline',
    meta: 'Giảm đau cơ 24%',
  },
  {
    id: 'sleep',
    icon: 'moon',
    iconColor: Palette.tagPrepareText,
    title: 'Giao thức Giấc ngủ',
    subtitle: 'Thư giãn từ 21:45',
    tag: 'Chuẩn bị',
    tagBg: Palette.tagPrepareBg,
    tagColor: Palette.tagPrepareText,
    metaIcon: 'moon-outline',
    meta: 'Không ánh sáng xanh sau 21:00',
  },
];

const ActivityPlanList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Ionicons name="fitness-outline" size={13} color={Palette.textMuted} />
        <Text style={styles.sectionTitle}>KẾ HOẠCH HOẠT ĐỘNG</Text>
      </View>

      {PLANS.map((plan, index) => (
        <View key={plan.id} style={[styles.item, index > 0 && styles.itemDivider]}>
          <View style={styles.topRow}>
            <Ionicons name={plan.icon} size={20} color={plan.iconColor} />
            <View style={[styles.tag, { backgroundColor: plan.tagBg }]}>
              <Text style={[styles.tagLabel, { color: plan.tagColor }]}>{plan.tag}</Text>
            </View>
          </View>

          <Text style={styles.title}>{plan.title}</Text>
          <Text style={styles.subtitle}>{plan.subtitle}</Text>

          <View style={styles.metaRow}>
            <Ionicons name={plan.metaIcon} size={12} color={Palette.textMuted} />
            <Text style={styles.meta}>{plan.meta}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ActivityPlanList;
