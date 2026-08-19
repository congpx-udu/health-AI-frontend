import { StyleSheet } from 'react-native';

import { Palette, Radius } from '@/constants/theme';
import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    gap: s(10),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(6),
  },
  sectionTitle: {
    fontSize: s(11),
    letterSpacing: s(0.8),
    fontWeight: '700',
    color: Palette.textMuted,
  },
  remainingBadge: {
    paddingVertical: s(4),
    paddingHorizontal: s(10),
    borderRadius: Radius.pill,
    backgroundColor: Palette.primarySoft,
  },
  remainingLabel: {
    fontSize: s(10),
    fontWeight: '600',
    color: Palette.primary,
  },
  meal: {
    gap: s(2),
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: s(10),
  },
  mealName: {
    fontSize: s(13),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  totalBadge: {
    paddingVertical: s(3),
    paddingHorizontal: s(9),
    borderRadius: Radius.pill,
    backgroundColor: Palette.divider,
  },
  totalLabel: {
    fontSize: s(9),
    fontWeight: '700',
    letterSpacing: s(0.4),
    color: Palette.textSecondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
    paddingVertical: s(11),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Palette.divider,
  },
  iconBox: {
    width: s(34),
    height: s(34),
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Palette.divider,
  },
  photo: {
    width: s(38),
    height: s(38),
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.divider,
  },
  photoEmoji: {
    fontSize: s(20),
  },
  rowBody: {
    flex: 1,
    gap: s(2),
  },
  rowTitle: {
    fontSize: s(13),
    fontWeight: '600',
    color: Palette.textPrimary,
  },
  rowSubtitle: {
    fontSize: s(10),
    color: Palette.textMuted,
  },
  rowRight: {
    alignItems: 'flex-end',
    gap: s(2),
  },
  calories: {
    fontSize: s(14),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  caloriesUnit: {
    fontSize: s(8),
    letterSpacing: s(0.4),
    color: Palette.textMuted,
  },
  photoCalories: {
    fontSize: s(13),
    fontWeight: '700',
    color: Palette.textPrimary,
  },
  dots: {
    flexDirection: 'row',
    gap: s(3),
  },
  dot: {
    width: s(5),
    height: s(5),
    borderRadius: Radius.pill,
    backgroundColor: Palette.track,
  },
  dotActive: {
    backgroundColor: Palette.primary,
  },
  workoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(12),
    marginTop: s(6),
    padding: s(12),
    borderRadius: Radius.lg,
    backgroundColor: Palette.primarySoft,
  },
  workoutIcon: {
    width: s(34),
    height: s(34),
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.card,
  },
  workoutTitle: {
    fontSize: s(13),
    fontWeight: '700',
    color: Palette.primary,
  },
  workoutCalories: {
    fontSize: s(14),
    fontWeight: '700',
    color: Palette.primary,
  },
  workoutUnit: {
    fontSize: s(8),
    letterSpacing: s(0.4),
    color: Palette.primary,
  },
});
