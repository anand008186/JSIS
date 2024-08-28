import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';


export default function AuthLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });



  return (
  <Stack 
  screenOptions={
    {
      headerShown: false,
    }
  }>
    <Stack.Screen name="index" />
    <Stack.Screen name="admin" />
    <Stack.Screen name="employee" />
  </Stack>
  );
}
