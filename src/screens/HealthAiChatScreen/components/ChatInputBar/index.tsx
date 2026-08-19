import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput, View } from 'react-native';

import { Palette } from '@/constants/theme';
import { s } from '@/utils/scale';

import { styles } from './styles';

const ChatInputBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Pressable style={styles.addButton} hitSlop={6}>
          <Ionicons name="add" size={s(22)} color={Palette.textSecondary} />
        </Pressable>

        <TextInput
          style={styles.input}
          placeholder="Hỏi AI về sức khỏe của bạn..."
          placeholderTextColor={Palette.textMuted}
          editable={false}
        />

        <Pressable style={styles.sendButton} disabled>
          <Ionicons name="arrow-up" size={s(16)} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatInputBar;
