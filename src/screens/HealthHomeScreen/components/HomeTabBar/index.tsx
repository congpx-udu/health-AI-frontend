import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';

import { s } from '@/utils/scale';

import { AiChatIcon, ChartIcon, DnaIcon, HomeIcon, SidebarIcon, UserIcon } from '../AppIcons';
import { styles } from './styles';

const ICON_SIZE = s(19);

type TabId = 'sidebar' | 'home' | 'dna' | 'assistant' | 'chart' | 'profile';

type HomeTabBarProps = {
  activeTab?: TabId;
};

type TabItem = {
  id: TabId;
  Icon: typeof HomeIcon;
  fab?: boolean;
  route?: '/' | '/chat';
};

/** Thứ tự trái → phải theo bộ icon của bản thiết kế. */
const TABS: TabItem[] = [
  { id: 'sidebar', Icon: SidebarIcon },
  { id: 'home', Icon: HomeIcon, route: '/' },
  { id: 'dna', Icon: DnaIcon },
  { id: 'assistant', Icon: AiChatIcon, fab: true, route: '/chat' },
  { id: 'chart', Icon: ChartIcon },
  { id: 'profile', Icon: UserIcon },
];

const HomeTabBar = ({ activeTab = 'home' }: HomeTabBarProps) => {
  const router = useRouter();

  const handlePress = (tab: TabItem) => {
    if (tab.route) {
      router.push(tab.route);
    }
  };

  return (
    <View style={styles.container}>
      {TABS.map(({ id, Icon, fab, route }) => {
        const isActive = id === activeTab;

        if (fab) {
          return (
            <Pressable
              key={id}
              style={[styles.fab, isActive && styles.fabActive]}
              onPress={() => handlePress({ id, Icon, fab, route })}>
              <Icon size={s(18)} />
            </Pressable>
          );
        }

        return (
          <Pressable key={id} style={styles.tab} onPress={() => handlePress({ id, Icon, fab, route })}>
            <Icon size={ICON_SIZE} />
          </Pressable>
        );
      })}
    </View>
  );
};

export default HomeTabBar;
