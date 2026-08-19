// Các type/interface dùng chung toàn app.

export type ApiResponse<T> = {
  data: T;
  message?: string;
};
