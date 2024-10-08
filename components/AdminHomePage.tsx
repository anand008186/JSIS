import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the logout icon
import { AppContext,AppContextProps } from '@/context/AppContext';
import {  useRouter } from 'expo-router';
import { truncateEmail } from '@/utils/helpFunc';
export default function AdminHomePage() {
  const router = useRouter();
  const { logout,currentUser } = React.useContext(AppContext) as AppContextProps;

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel"
        },
        { text: "Logout", onPress: async() => {
          await logout();
          router.push("/(auth)")
        }  }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'  }} // Replace with actual profile picture URL
          style={styles.profilePic}
        />
        <Text style={styles.title}>Welcome {truncateEmail(currentUser?.email ?? "")}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={()=> router.navigate("/(home)/(admin)/request")} >
          <Text style={styles.buttonText}>Permit Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> router.navigate("/(home)/(admin)/history")} >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32, // Space between the top of the screen and the container
    backgroundColor: '#f5f5f5', // Light grey background color
  },
  header: {
    backgroundColor: '#FFFFFF', // White background for the header
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20, // Make the image circular
    marginRight: 16, // Space between the profile pic and the title
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796B', // Dark teal color for the title
    flex: 1, // Take up remaining space
    textAlign: 'center', // Center the title text
  },
  content: {
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    flex: 1,
  },
  button: {
    backgroundColor: '#00796B', // Dark teal button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24, // Rounded button
    marginBottom: 16,
    alignItems: 'center',
    width: '80%', // Make buttons take 80% of the container's width
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});