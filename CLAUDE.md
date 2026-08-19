# CLAUDE.md — frontend (React Native Expo)

Base app Expo SDK 54 (expo-router v6, React Native 0.81, React 19.1) + TypeScript strict. Docs phiên bản: https://docs.expo.dev/versions/v54.0.0/ (giữ SDK 54 để tương thích Expo Go của người dùng — không tự ý nâng SDK).

## Chạy & kiểm tra

```bash
npm install          # cài deps
npx expo start       # dev server (a = Android, w = web, quét QR = Expo Go)
npx expo start -c    # xóa cache khi lỗi lạ
npx tsc --noEmit     # type-check — chạy sau khi sửa code
npx expo lint        # lint
```

## Cấu trúc (BẮT BUỘC tuân theo)

- `src/app/` — routes của expo-router. **Chỉ chứa file route mỏng** re-export từ `src/screens`, và `_layout.tsx`. KHÔNG viết logic/UI ở đây.
- `src/screens/<TenScreen>/` — mỗi màn hình một folder:
  - `index.tsx` — logic + JSX
  - `styles.ts` — StyleSheet (export `styles`)
  - `components/<TenComponent>/{index.tsx, styles.ts}` — components riêng của screen đó
- `src/components/<TenComponent>/{index.tsx, styles.ts}` — components dùng chung ≥2 screens
- `src/constants/theme.ts` — Colors, Fonts, Spacing (nguồn duy nhất cho màu/khoảng cách)
- `src/hooks/` — custom hooks (`use-kebab-case.ts`)
- `src/services/api.ts` — helper gọi API (get/post/put/delete)
- `src/types/`, `src/utils/` — types và hàm tiện ích dùng chung

## Quy ước code

- Import bằng alias `@/` (map sang `./src/`), không dùng `../../..`.
- Component: PascalCase, export default từ `index.tsx`; props type khai báo ngay trên component.
- Style tách ra `styles.ts` cùng folder; dùng `Spacing`/`Colors` từ `@/constants/theme`, không hardcode số/màu.
- Dark mode: dùng `useTheme()` (`@/hooks/use-theme`) hoặc `ThemedText`/`ThemedView`; không set màu cứng cho text/background.
- Thêm screen mới: tạo folder trong `src/screens`, thêm route 1 dòng trong `src/app`, đăng ký tab trong `_layout.tsx` nếu cần.
- Gọi API qua `api` từ `@/services/api`; đổi `BASE_URL` ở đó khi nối backend (folder `../backend`).

## Lưu ý

- Đây là monorepo thư mục: `../backend` là server; file này chỉ áp dụng cho `frontend/`.
- Không chạy `npm audit fix --force` (phá version Expo).
- Sau mỗi thay đổi structure/code, chạy `npx tsc --noEmit` để xác nhận không lỗi type.
