import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MI_QUANG_RESULT as result } from '@/constants/mockScanResult';
import { styles } from './styles';

export default function ScanResultScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: insets.top + 8, paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>
        <Text style={styles.headerTitle}>Kết quả quét</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="notifications-outline" size={22} color="#111" />
          <Ionicons name="settings-outline" size={22} color="#111" />
        </View>
      </View>

      {/* Ảnh món ăn + điểm sức khỏe */}
      <View style={styles.heroWrap}>
        <Image source={result.image} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.scoreBadge}>
          <Ionicons name="heart" size={120} color="rgba(255,255,255,0.8)" style={styles.scoreHeart} />
          <View style={styles.scoreContent}>
            <Text style={styles.scoreLabel}>ĐIỂM SỨC KHỎE</Text>
            <Text style={styles.scoreValue}>{result.healthScore}</Text>
          </View>
        </View>
      </View>

      {/* Tên món */}
      <Text style={styles.mealTag}>
        {result.meal} <Text style={styles.mealDot}>•</Text> {result.category}
      </Text>
      <Text style={styles.foodName}>{result.name}</Text>
      <Text style={styles.foodDesc}>{result.description}</Text>

      {/* Cảnh báo */}
      <View style={styles.warningBox}>
        <Ionicons name="alert-circle" size={20} color="#D93025" />
        <Text style={styles.warningText}>{result.warning}</Text>
      </View>

      {/* Năng lượng */}
      <View style={styles.energyCard}>
        <View style={styles.energyHeader}>
          <Text style={styles.cardLabel}>NĂNG LƯỢNG</Text>
          <Ionicons name="flame-outline" size={20} color="#111" />
        </View>
        <Text style={styles.energyValue}>
          {result.calories} <Text style={styles.energyUnit}>kcal</Text>
        </Text>
      </View>

      {/* Macros */}
      {result.macros.map((m) => (
        <View key={m.label} style={styles.macroCard}>
          <View style={styles.macroRow}>
            <Text style={styles.cardLabel}>{m.label}</Text>
            <Text style={styles.macroValue}>{m.value}</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${m.percent * 100}%` }]} />
          </View>
          <Text style={styles.macroNote}>{m.note}</Text>
        </View>
      ))}

      {/* Phân tích AI */}
      <View style={styles.aiCard}>
        <View style={styles.aiHeader}>
          <View style={styles.aiIconBox}>
            <Ionicons name="sparkles" size={20} color="#6D6AF6" />
          </View>
          <Text style={styles.aiTitle}>Phân tích từ Health AI VN</Text>
        </View>
        <View style={styles.aiBody}>
          <Text style={styles.aiAdviceLabel}>Lời khuyên:</Text>
          {result.aiAdvice.map((line, i) => (
            <Text key={i} style={styles.aiText}>
              – {line}
            </Text>
          ))}
        </View>
      </View>

      {/* Chi tiết thành phần */}
      <View style={styles.ingredientCard}>
        <View style={styles.ingredientHeader}>
          <Ionicons name="list" size={18} color="#111" />
          <Text style={styles.ingredientTitle}>Chi tiết thành phần</Text>
        </View>
        {result.ingredients.map((ing, i) => (
          <View
            key={ing.name}
            style={[styles.ingredientRow, i > 0 && styles.ingredientDivider]}>
            <Text style={styles.ingredientName}>{ing.name}</Text>
            <Text style={styles.ingredientKcal}>{ing.kcal} kcal</Text>
          </View>
        ))}
      </View>

      <Pressable style={styles.chatBtn}>
        <Text style={styles.chatBtnText}>Chat thêm với Health AI</Text>
      </Pressable>
    </ScrollView>
  );
}
