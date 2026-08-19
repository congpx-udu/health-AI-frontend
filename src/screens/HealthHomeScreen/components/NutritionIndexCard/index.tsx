import { Text, View } from 'react-native';

import { styles } from './styles';

const MACROS = [
  { id: 'protein', label: 'Chất đạm', current: 82, target: 150 },
  { id: 'carb', label: 'Tinh bột', current: 120, target: 220 },
  { id: 'fat', label: 'Chất béo', current: 42, target: 80 },
];

const NutritionIndexCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉ số dinh dưỡng</Text>

      {MACROS.map((macro) => (
        <View key={macro.id} style={styles.row}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>{macro.label}</Text>
            <Text style={styles.value}>
              {macro.current}g / {macro.target}g
            </Text>
          </View>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${(macro.current / macro.target) * 100}%` }]} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default NutritionIndexCard;
