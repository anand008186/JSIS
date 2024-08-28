import { Link, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MainPage() {
  const router = useRouter();

useEffect(() => {
  console.log('MainPage mounted');
  return () => {
    console.log('MainPage unmounted');
  };
}
, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to JSIS</Text>
      <TouchableOpacity style={styles.button}  onPress={()=> router.navigate("/(auth)/employee")}  >
        <Text style={styles.buttonText}>Login as Employee</Text>
    </TouchableOpacity >
    
      <TouchableOpacity style={styles.button} onPress={()=> router.navigate("/(auth)/admin")} >
      <Text style={styles.buttonText}>Login as Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Light blue background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#00796B', // Black color for title
  },
  button: {
    backgroundColor: '#00796B', // Blue button background
    borderRadius: 30, // Rounded buttons
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
    width: '70%', // Button width relative to the container
    alignItems: 'center', // Center text inside button
  },
  link: {},
  buttonText: {
    color: '#fff', // White text color
    fontSize: 14,
    fontWeight: 'bold',
  },
});
