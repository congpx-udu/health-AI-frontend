import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import Svg, { Defs, Ellipse, LinearGradient as SvgGradient, Path, Stop } from 'react-native-svg';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

import { styles } from './styles';

const BODY_PATH =
  'M100 76 C88 76 84 87 84 97 C84 106 69 110 55 116 C39 123 29 133 25 149 ' +
  'C19 174 17 212 15 280 L185 280 C183 212 181 174 175 149 C171 133 161 123 145 116 ' +
  'C131 110 116 106 116 97 C116 87 112 76 100 76 Z';

type StatProps = {
  value: string;
  suffix?: string;
  label: string;
};

const Stat = ({ value, suffix, label }: StatProps) => (
  <View style={styles.stat}>
    <View style={styles.statValueRow}>
      <Text style={styles.statValue}>{value}</Text>
      {suffix ? <Text style={styles.statSuffix}>{suffix}</Text> : null}
    </View>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const BodyModelHero = () => {
  return (
    <LinearGradient colors={Palette.heroGradient} style={styles.container}>
      <Svg width={s(230)} height={s(300)} viewBox="0 0 200 280">
        <Defs>
          <SvgGradient id="skin" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFFFFF" />
            <Stop offset="0.55" stopColor="#F1EFFB" />
            <Stop offset="1" stopColor="#D8D3F0" />
          </SvgGradient>
        </Defs>
        <Ellipse cx="100" cy="42" rx="29" ry="39" fill="url(#skin)" />
        <Path d={BODY_PATH} fill="url(#skin)" />
      </Svg>

      <View style={styles.statsRow}>
        <Stat value="92" suffix="/100" label="Điểm cơ thể" />
        <Stat value="30" label="Tuổi sinh học" />
      </View>
    </LinearGradient>
  );
};

export default BodyModelHero;
