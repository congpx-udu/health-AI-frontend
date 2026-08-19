import { Text, View } from 'react-native';

import BotAvatar from '../BotAvatar';
import { styles } from './styles';

const WaitingState = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <BotAvatar />

        <View style={styles.content}>
          <View style={styles.typingBubble}>
            <View style={styles.dot} />
            <View style={[styles.dot, styles.dotMid]} />
            <View style={[styles.dot, styles.dotLast]} />
          </View>

          <Text style={styles.statusText}>Đang chờ phản hồi từ ChatGPT...</Text>
          <Text style={styles.hintText}>
            Health AI Agent sẽ trả lời ngay khi kết nối xong. Bạn có thể hỏi về dinh dưỡng, lịch
            tập hoặc quét món ăn.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WaitingState;
