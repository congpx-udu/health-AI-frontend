import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Lấy IP của máy chạy Metro để điện thoại (Expo Go) gọi được backend cùng mạng LAN.
const host = Constants.expoConfig?.hostUri?.split(':')[0] ?? 'localhost';
export const API_BASE = `http://${host}:8000`;

export type ApiMacro = {
  key: string;
  label: string;
  value: number;
  unit: string;
  percent: number; // 0..100
  note: string;
};

export type ApiIngredient = { name: string; calories: number };

export type ApiFood = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  health_score: number;
  meal_type: string;
  category: string;
  description: string;
  warning: string;
  image_url: string | null;
  macros: ApiMacro[];
  analysis: string[];
  advice: string;
  ingredients: ApiIngredient[];
};

export type ScanResponse = {
  success: boolean;
  food: ApiFood;
  image: { width: number; height: number };
  matched_by: 'exact' | 'histogram' | 'fallback';
};

/** Upload ảnh (uri từ camera hoặc data/blob URL trên web) lên backend để nhận diện. */
export async function scanFood(photoUri: string): Promise<ScanResponse> {
  const formData = new FormData();

  if (Platform.OS === 'web') {
    const blob = await (await fetch(photoUri)).blob();
    formData.append('image', new File([blob], 'scan.jpg', { type: blob.type || 'image/jpeg' }));
  } else {
    formData.append('image', {
      uri: photoUri,
      name: 'scan.jpg',
      type: 'image/jpeg',
    } as unknown as Blob);
  }

  const res = await fetch(`${API_BASE}/api/foods/scan`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Scan failed (${res.status}): ${detail}`);
  }
  return res.json();
}
