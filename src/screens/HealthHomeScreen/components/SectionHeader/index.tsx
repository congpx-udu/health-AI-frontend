import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { Palette } from '@/constants/theme';

import { styles } from './styles';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
};

const SectionHeader = ({ title, actionLabel }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionLabel ? (
        <Pressable style={styles.action}>
          <Ionicons name="add" size={15} color={Palette.textPrimary} />
          <Text style={styles.actionLabel}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default SectionHeader;
