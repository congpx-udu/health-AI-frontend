import { Pressable, View } from 'react-native';

import { s } from '@/utils/scale';

import { AiChatIcon, ChartIcon, DnaIcon, HomeIcon, SidebarIcon, UserIcon } from '../AppIcons';
import { styles } from './styles';

const ICON_SIZE = s(19);

/** Thứ tự trái → phải theo bộ icon của bản thiết kế. */
const TABS = [
  { id: 'sidebar', Icon: SidebarIcon },
  { id: 'home', Icon: HomeIcon },
  { id: 'dna', Icon: DnaIcon },
  { id: 'assistant', Icon: AiChatIcon, fab: true },
  { id: 'chart', Icon: ChartIcon },
  { id: 'profile', Icon: UserIcon },
] as const;

const HomeTabBar = () => {
  return (
    <View style={styles.container}>
      {TABS.map(({ id, Icon, ...tab }) =>
        'fab' in tab && tab.fab ? (
          <Pressable key={id} style={styles.fab}>
            <Icon size={s(18)} />
          </Pressable>
        ) : (
          <Pressable key={id} style={styles.tab}>
            <Icon size={ICON_SIZE} />
          </Pressable>
        ),
      )}
    </View>
  );
};

export default HomeTabBar;
