import { StyleSheet } from 'react-native';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.screenBg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: s(24),
  },
  section: {
    paddingHorizontal: s(20),
    gap: s(16),
  },
});
