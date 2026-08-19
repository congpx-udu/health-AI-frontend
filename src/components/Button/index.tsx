import { ActivityIndicator, Pressable, type PressableProps } from 'react-native';

import ThemedText from '@/components/ThemedText';

import { styles } from './styles';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
};

const Button = ({ title, variant = 'primary', loading = false, disabled, style, ...rest }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        (pressed || disabled || loading) && styles.dimmed,
        typeof style === 'function' ? style({ pressed, hovered: false }) : style,
      ]}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <ThemedText style={variant === 'primary' ? styles.primaryText : styles.secondaryText}>{title}</ThemedText>
      )}
    </Pressable>
  );
};

export default Button;
