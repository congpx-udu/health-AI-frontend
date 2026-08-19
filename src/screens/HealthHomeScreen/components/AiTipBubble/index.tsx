import { Pressable, Text, View } from 'react-native';

import { s } from '@/utils/scale';

import { AiChatIcon } from '../AppIcons';
import { styles } from './styles';

const AiTipBubble = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>
            Bữa trưa của bạn hơi thiếu đạm, hãy bổ sung thêm nhé!
          </Text>
        </View>

        <Pressable style={styles.fab}>
          <AiChatIcon size={s(19)} />
        </Pressable>
      </View>

      <Text style={styles.caption}>
        Dựa trên khả năng phục hồi chuyển hóa và cấu trúc giấc ngủ của bạn trong 24 giờ qua.
      </Text>
    </View>
  );
};

export default AiTipBubble;
