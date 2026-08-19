// Các hàm tiện ích dùng chung toàn app.

export function formatDate(date: Date | string, locale = 'vi-VN'): string {
  return new Date(date).toLocaleDateString(locale);
}
