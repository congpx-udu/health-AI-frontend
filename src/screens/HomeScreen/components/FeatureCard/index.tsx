import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';

import { styles } from './styles';

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <ThemedView themeColor="backgroundElement" style={styles.container}>
      <ThemedText type="subtitle">{title}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {description}
      </ThemedText>
    </ThemedView>
  );
};

export default FeatureCard;
