import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';


export default function EmployeeLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../../../assets/fonts/SpaceMono-Regular.ttf'),
  });



  return (
   
      <Stack 
      screenOptions={
        {
          headerShown: false,
        }
      }

      >
      
        <Stack.Screen name="index" 
         />
        <Stack.Screen name="history" />
        <Stack.Screen name="RaisePermit" />
      </Stack>
  );
}
