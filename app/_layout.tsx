import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ExoRegular: require('../assets/fonts/Exo2-Regular.ttf'),
    ExoLight: require('../assets/fonts/Exo2-Light.ttf'),
    KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
    KanitLight: require('../assets/fonts/Kanit-ExtraLight.ttf'),
    KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       <Stack.Screen name="search/index" options={{ headerShown: false }} />
       <Stack.Screen name="history/index" options={{ headerShown: false }} />
        <Stack.Screen name="video-list/[slug]" options={{ headerShown:false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
