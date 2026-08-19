import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

import { styles } from './styles';

const RING_SIZE = s(118);
const STROKE = s(13);
const RADIUS = (RING_SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const PROGRESS = 0.58;

const METRICS = [
  { id: 'goal', icon: 'locate-outline', label: 'MỤC TIÊU', value: '2.400' },
  { id: 'food', icon: 'restaurant-outline', label: 'THỨC ĂN', value: '980' },
  { id: 'burn', icon: 'flame-outline', label: 'ĐỐT CHÁY', value: '240' },
] as const;

const CalorieRingCard = () => {
  return (
    <LinearGradient
      colors={Palette.cardGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.ringWrap}>
          <Svg width={RING_SIZE} height={RING_SIZE}>
            <Circle
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RADIUS}
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={STROKE}
              fill="none"
            />
            <Circle
              cx={RING_SIZE / 2}
              cy={RING_SIZE / 2}
              r={RADIUS}
              stroke={Palette.onPrimary}
              strokeWidth={STROKE}
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${CIRCUMFERENCE * PROGRESS} ${CIRCUMFERENCE}`}
              transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
            />
          </Svg>

          <View style={styles.ringCenter}>
            <Text style={styles.ringValue}>1.420</Text>
            <Text style={styles.ringLabel}>CÒN LẠI</Text>
          </View>
        </View>

        <View style={styles.metrics}>
          {METRICS.map((metric) => (
            <View key={metric.id} style={styles.metric}>
              <Ionicons name={metric.icon} size={13} color={Palette.onPrimaryMuted} />
              <View style={styles.metricText}>
                <Text style={styles.metricLabel}>{metric.label}</Text>
                <View style={styles.metricValueRow}>
                  <Text style={styles.metricValue}>{metric.value}</Text>
                  <Text style={styles.metricUnit}>kcal</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.note}>
        Bạn đã đạt 58% mục tiêu calo hôm nay. Hãy duy trì cường độ vận động này nhé!
      </Text>
    </LinearGradient>
  );
};

export default CalorieRingCard;
