# Frontend — React Native (Expo)

Base app React Native xây dựng bằng [Expo](https://expo.dev) + TypeScript + [expo-router](https://docs.expo.dev/router/introduction/).

## Yêu cầu

- Node.js >= 20
- App **Expo Go** trên điện thoại (Android/iOS), hoặc Android Emulator / iOS Simulator

## Cách chạy

```bash
cd frontend
npm install        # cài dependencies (chỉ lần đầu)
npx expo start     # khởi động dev server
```

Sau khi dev server chạy:

- **Điện thoại thật**: mở app Expo Go và quét mã QR trong terminal
- **Android emulator**: nhấn `a` trong terminal (hoặc `npm run android`)
- **iOS simulator** (chỉ macOS): nhấn `i` (hoặc `npm run ios`)
- **Trình duyệt web**: nhấn `w` (hoặc `npm run web`)

Lệnh khác:

```bash
npx expo start -c   # chạy và xóa cache (khi gặp lỗi lạ)
npx expo lint       # kiểm tra lint
npx tsc --noEmit    # kiểm tra type TypeScript
```

## Cấu trúc thư mục

```
frontend/
├── assets/                      # Ảnh, font, icon tĩnh
├── src/
│   ├── app/                     # ROUTES (expo-router) — chỉ khai báo route, không chứa logic
│   │   ├── _layout.tsx          # Layout gốc: Tabs + ThemeProvider
│   │   ├── index.tsx            # Route "/" → re-export HomeScreen
│   │   └── explore.tsx          # Route "/explore" → re-export ExploreScreen
│   │
│   ├── screens/                 # MÀN HÌNH — mỗi screen một folder
│   │   ├── HomeScreen/
│   │   │   ├── index.tsx        # Logic + JSX của màn hình
│   │   │   ├── styles.ts        # StyleSheet của màn hình
│   │   │   └── components/      # Components RIÊNG của màn hình này
│   │   │       ├── Header/
│   │   │       │   ├── index.tsx
│   │   │       │   └── styles.ts
│   │   │       └── FeatureCard/
│   │   │           ├── index.tsx
│   │   │           └── styles.ts
│   │   └── ExploreScreen/
│   │       ├── index.tsx
│   │       └── styles.ts
│   │
│   ├── components/              # Components DÙNG CHUNG giữa nhiều screen
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── ThemedText/
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── ThemedView/
│   │       └── index.tsx
│   │
│   ├── constants/               # Hằng số: theme.ts (Colors, Fonts, Spacing)
│   ├── hooks/                   # Custom hooks (use-theme, use-color-scheme)
│   ├── services/                # Gọi API (api.ts)
│   ├── types/                   # Type/interface dùng chung
│   └── utils/                   # Hàm tiện ích dùng chung
│
├── app.json                     # Cấu hình Expo
├── package.json
└── tsconfig.json                # Alias @/* → ./src/*
```

## Quy ước

### Screen mới

1. Tạo folder `src/screens/TenScreen/` gồm `index.tsx`, `styles.ts`, và `components/` nếu cần.
2. Tạo route trong `src/app/` chỉ 1 dòng:
   ```tsx
   export { default } from '@/screens/TenScreen';
   ```
3. Nếu screen nằm trong tab bar, thêm `Tabs.Screen` vào `src/app/_layout.tsx`.

### Component mới

- Component **chỉ 1 screen dùng** → đặt trong `src/screens/TenScreen/components/TenComponent/`.
- Component **nhiều screen dùng** → đặt trong `src/components/TenComponent/`.
- Mỗi component là 1 folder: `index.tsx` (logic + JSX) và `styles.ts` (StyleSheet). Không viết style inline dài trong JSX.

### Quy ước chung

- Đặt tên component/screen theo **PascalCase**; hooks theo `use-kebab-case.ts`.
- Import qua alias `@/` (ví dụ `@/components/Button`), không dùng đường dẫn tương đối dài `../../..`.
- Màu sắc, khoảng cách lấy từ `@/constants/theme` (`Colors`, `Spacing`, `Fonts`) — không hardcode.
- Component nhận theme qua hook `useTheme()` để tự hỗ trợ dark mode.
- Gọi API qua `@/services/api`, không `fetch` trực tiếp trong component.

## Tài liệu

- [Expo docs](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native components](https://reactnative.dev/docs/components-and-apis)
