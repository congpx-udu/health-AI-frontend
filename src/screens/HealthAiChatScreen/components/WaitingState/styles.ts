import { StyleSheet } from 'react-native';

import { s } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: s(32),
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: s(10),
    alignSelf: 'stretch',
    maxWidth: s(320),
  },
  content: {
    flex: 1,
    gap: s(10),
    paddingTop: s(2),
  },
  typingBubble: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(5),
    paddingVertical: s(12),
    paddingHorizontal: s(16),
    borderRadius: s(18),
    backgroundColor: '#CCCDFF',
  },
  dot: {
    width: s(7),
    height: s(7),
    borderRadius: s(4),
    backgroundColor: '#6367FF',
    opacity: 0.55,
  },
  dotMid: {
    opacity: 0.75,
  },
  dotLast: {
    opacity: 1,
  },
  statusText: {
    fontSize: s(13),
    lineHeight: s(18),
    color: '#6367FF',
    fontWeight: '500',
  },
  hintText: {
    fontSize: s(12),
    lineHeight: s(17),
    color: '#8A8AA3',
  },
});
