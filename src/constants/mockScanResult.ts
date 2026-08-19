export type ScanResult = {
  id: string;
  image: number; // require() asset
  meal: string;
  category: string;
  name: string;
  description: string;
  healthScore: number;
  warning: string;
  calories: number;
  macros: {
    label: string;
    value: string;
    percent: number; // 0..1 for progress bar
    note: string;
  }[];
  aiAdvice: string[];
  ingredients: { name: string; kcal: number }[];
};

export const MI_QUANG_RESULT: ScanResult = {
  id: 'miquang',
  image: require('../../assets/images/miquang.jpg'),
  meal: 'BỮA SÁNG',
  category: 'MỲ',
  name: 'Mỳ Quảng',
  description:
    'Đã được AI nhận diện chính xác 98%. Bao gồm ức gà nướng mộc, xà lách hỗn hợp và sốt dầu dấm.',
  healthScore: 75,
  warning:
    'HEALTH AI khuyên bạn nên chạy bộ 20p để tiêu hao năng lượng sau khi ăn món ăn này',
  calories: 370,
  macros: [
    { label: 'ĐẠM (PROTEIN)', value: '30g', percent: 0.85, note: '85% mục tiêu bữa trưa' },
    { label: 'TINH BỘT (CARBS)', value: '11g', percent: 0.35, note: 'Thấp so với trung bình' },
    { label: 'CHẤT BÉO (FAT)', value: '16g', percent: 0.55, note: 'Chất béo không bão hòa tốt' },
  ],
  aiAdvice: [
    'Hãy hạn chế ăn những đồ ăn có nhiều đạm như hải sản vì gần đây bạn đang gặp vấn đề về gout chân, đồ ăn nhiều đạm sẽ làm triệu chứng của bạn chuyển biến nghiêm trọng hơn.',
    'Tiếp theo, lời khuyên chân thành nhất cho bạn, hãy chạy bộ 20p cho tối nay để tiêu hao bớt lượng năng lượng bạn đã tiêu hao trong ngày.',
  ],
  ingredients: [
    { name: 'Ức gà nướng (150g)', kcal: 248 },
    { name: 'Rau xà lách & Cà chua', kcal: 45 },
    { name: 'Sốt dầu dấm (15ml)', kcal: 49 },
  ],
};
