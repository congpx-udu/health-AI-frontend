import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/*
        Dùng Stack thay cho Tabs: HealthHomeScreen đã có thanh tab riêng theo thiết kế,
        lồng thêm Tabs của expo-router sẽ ra hai thanh tab chồng nhau.
      */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="scan" />
        <Stack.Screen name="result" />
      </Stack>
    </ThemeProvider>
  );
}
