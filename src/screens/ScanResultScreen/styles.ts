import { StyleSheet } from 'react-native';

const ACCENT = '#6D6AF6';
const PAGE = '#FFFFFF';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PAGE, paddingHorizontal: 16 },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E3E4E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTitle: { flex: 1, fontSize: 20, fontWeight: '700', color: '#111' },
  headerIcons: { flexDirection: 'row', gap: 16 },

  heroWrap: { borderRadius: 20, overflow: 'hidden' },
  heroImage: { width: '100%', height: 220 },
  scoreBadge: {
    position: 'absolute',
    top: 40,
    left: 16,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreHeart: { position: 'absolute' },
  scoreContent: { alignItems: 'center', marginTop: -8 },
  scoreLabel: { fontSize: 9, fontWeight: '700', color: '#333' },
  scoreValue: { fontSize: 30, fontWeight: '800', color: '#111' },

  mealTag: {
    marginTop: 16,
    color: ACCENT,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
  },
  mealDot: { color: ACCENT },
  foodName: { fontSize: 24, fontWeight: '800', color: '#111', marginTop: 4 },
  foodDesc: { fontSize: 14, color: '#5A5E66', marginTop: 6, lineHeight: 20 },

  warningBox: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: '#F6F1EE',
    borderRadius: 14,
    padding: 14,
    marginTop: 16,
    alignItems: 'center',
  },
  warningText: { flex: 1, color: '#D93025', fontSize: 13, lineHeight: 19 },

  energyCard: {
    backgroundColor: '#F7F7FA',
    borderRadius: 14,
    padding: 16,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: ACCENT,
  },
  energyHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  cardLabel: { fontSize: 12, fontWeight: '700', color: '#3A3E46', letterSpacing: 0.6 },
  energyValue: { fontSize: 40, fontWeight: '800', color: '#111', marginTop: 6 },
  energyUnit: { fontSize: 16, fontWeight: '600', color: '#5A5E66' },

  macroCard: {
    backgroundColor: '#F7F7FA',
    borderRadius: 14,
    padding: 16,
    marginTop: 12,
  },
  macroRow: { flexDirection: 'row', justifyContent: 'space-between' },
  macroValue: { fontSize: 15, fontWeight: '800', color: '#111' },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E3E4E8',
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: { height: 8, borderRadius: 4, backgroundColor: ACCENT },
  macroNote: { fontSize: 12, color: '#7A7E86', marginTop: 8 },

  aiCard: {
    backgroundColor: '#EEEEFB',
    borderRadius: 18,
    padding: 16,
    marginTop: 16,
  },
  aiHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  aiIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aiTitle: { fontSize: 17, fontWeight: '800', color: '#2F2CC7' },
  aiBody: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginTop: 14,
  },
  aiAdviceLabel: { color: ACCENT, fontWeight: '800', marginBottom: 6 },
  aiText: { fontSize: 14, color: '#33363D', lineHeight: 21, marginBottom: 8 },
  chatBtn: {
    alignSelf: 'center',
    backgroundColor: ACCENT,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 20,
  },
  chatBtnText: { color: '#fff', fontSize: 13, fontWeight: '700' },

  ingredientCard: {
    backgroundColor: '#F7F7FA',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  ingredientHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  ingredientTitle: { fontSize: 16, fontWeight: '800', color: '#111' },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  ingredientDivider: { borderTopWidth: 1, borderTopColor: '#E7E8EC' },
  ingredientName: { fontSize: 14, color: '#33363D' },
  ingredientKcal: { fontSize: 14, fontWeight: '800', color: '#111' },
});
