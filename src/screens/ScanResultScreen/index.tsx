import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MI_QUANG_RESULT, PHO_BO_RESULT, ScanResult } from '@/constants/mockScanResult';
import { API_BASE, ApiFood } from '@/services/foodApi';
import { styles } from './styles';

// Ảnh local dự phòng khi backend không trả image_url
const LOCAL_IMAGES: Record<string, number> = {
  mi_quang: MI_QUANG_RESULT.image,
  pho_bo_tai_nam: PHO_BO_RESULT.image,
};

type DisplayData = Omit<ScanResult, 'image'> & { imageSource: any };

function fromApiFood(food: ApiFood): DisplayData {
  return {
    id: food.id,
    imageSource: food.image_url
      ? { uri: `${API_BASE}${food.image_url}` }
      : LOCAL_IMAGES[food.id] ?? MI_QUANG_RESULT.image,
    meal: food.meal_type.toUpperCase(),
    category: food.category.toUpperCase(),
    name: food.name,
    description: food.description,
    healthScore: food.health_score,
    warning: food.warning,
    calories: food.calories,
    macros: food.macros.map((m) => ({
      label: m.label.toUpperCase(),
      value: `${m.value}${m.unit}`,
      percent: m.percent / 100,
      note: m.note,
    })),
    aiAdvice: [...food.analysis, food.advice],
    ingredients: food.ingredients.map((i) => ({ name: i.name, kcal: i.calories })),
  };
}

function fromMock(mock: ScanResult): DisplayData {
  const { image, ...rest } = mock;
  return { ...rest, imageSource: image };
}

export default function ScanResultScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { food, id } = useLocalSearchParams<{ food?: string; id?: string }>();

  const result = useMemo<DisplayData>(() => {
    if (food) {
      try {
        return fromApiFood(JSON.parse(food) as ApiFood);
      } catch {
        // rơi xuống mock nếu param hỏng
      }
    }
    return fromMock(id === 'botainam' ? PHO_BO_RESULT : MI_QUANG_RESULT);
  }, [food, id]);

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
        <Image source={result.imageSource} style={styles.heroImage} resizeMode="cover" />
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
