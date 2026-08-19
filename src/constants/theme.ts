/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

/**
 * Design tokens cho màn hình Health Home (bản demo dựng theo mockup Figma).
 * Base scale: iPhone 13 — 390 x 844 pt.
 */
export const DesignWidth = 390;

export const Palette = {
  primary: '#6C5CE7',
  primaryDark: '#5A4BD6',
  primaryLight: '#8B7CF0',
  primarySoft: '#EEEBFF',

  screenBg: '#F5F5FA',
  card: '#FFFFFF',
  divider: '#EFEFF4',
  track: '#ECECF3',

  textPrimary: '#1B1B2F',
  textSecondary: '#8A8AA3',
  textMuted: '#A9A9BD',
  onPrimary: '#FFFFFF',
  onPrimaryMuted: 'rgba(255, 255, 255, 0.72)',

  heroGradient: ['#EDEBFD', '#DFDBFA', '#CFC9F7'] as const,
  bannerGradient: ['#7A6BF3', '#9C8BFB'] as const,
  cardGradient: ['#6E5FEA', '#8A79F5'] as const,
  waterGradient: ['#6A5AE8', '#8C7BF4'] as const,

  tabIconStrong: '#1A1A1A',
  tabIconDefault: '#454555',
  tabIconActive: '#6367FF',

  tagNeutralBg: '#EFEFF4',
  tagNeutralText: '#6E6E85',
  tagRecoveryBg: '#FFE7DA',
  tagRecoveryText: '#F0784A',
  tagPrepareBg: '#E1EBFF',
  tagPrepareText: '#4B7BEC',

  shadow: '#6C5CE7',
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 26,
  pill: 999,
} as const;
