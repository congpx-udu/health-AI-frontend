import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Quét',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name="scan-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="result"
          options={{
            href: null,
            headerShown: false,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
