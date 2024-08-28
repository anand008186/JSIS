import { Stack } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppContext , AppContextProps} from '@/context/AppContext';

export default function App() {

  const {currentUser,fetchUserRole} = useContext(AppContext) as AppContextProps;

  useEffect(() => {
    fetchUserRole();
  }
  ,[]);

  return (
   
    <Stack >
      {
        currentUser ? (
          <Stack.Screen name="(home)" />
        ) : (
          <Stack.Screen name="(auth)" />
        )
      }

    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});