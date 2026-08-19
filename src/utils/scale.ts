import { Dimensions } from 'react-native';

import { DesignWidth } from '@/constants/theme';

const { width } = Dimensions.get('window');

/**
 * Quy đổi kích thước từ bản thiết kế iPhone 13 (rộng 390pt) sang màn hình hiện tại.
 * Giới hạn hệ số để không phóng quá to trên tablet.
 */
const ratio = Math.min(Math.max(width / DesignWidth, 0.85), 1.15);

export const s = (size: number) => Math.round(size * ratio * 100) / 100;
