import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MainPage from '@/components/MainPage';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AppProvider } from '@/context/AppContext';


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });



  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>\
    <AppProvider>
      <Stack 
      screenOptions={
        {
          headerShown: false,
        }
      }

      >
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="(auth)" 
         />
         <Stack.Screen name="(home)" />

      </Stack>
      </AppProvider>
    </ThemeProvider>
  );
}
