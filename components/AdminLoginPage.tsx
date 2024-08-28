import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the back arrow icon
import { useRouter } from 'expo-router';
import { handleAdminLogin } from '@/api/firebaseApi';

export default function AdminLoginPage() {
  const [employeeId, setLocalEmployeeId] = useState('');
  const [password, setLocalPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin =  async() => {
    if (!employeeId || !password) {
      setError('Both fields are required');
      return;
    }
    setError('');
  try {
    setLoading(true);
    await handleAdminLogin(employeeId,password)
    setLoading(false);
    router.push('/(admin)');
  } catch (error:any) {
    setLoading(false);
    console.log(error)
      switch (error.code) {
      case 'auth/invalid-email':
        setError("Invalid Credentials");
        break;
      case 'auth/user-disabled':
        setError("User account has been disabled by an administrator.");
        break;
      case 'auth/user-not-found':
        setError("Invalid Credentials");
        break;
      case 'auth/wrong-password':
        setError("Invalid Credentials");
        break;
      default:
        setError("Something went wrong. Please try again later.");
        break;
    }
    
  }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> router.dismiss(1)} >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Admin Login</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="Employee ID"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={setLocalEmployeeId}
          value={employeeId}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="grey"
          style={styles.input}
          secureTextEntry
          onChangeText={setLocalPassword}
          value={password}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#00796B" />
            </View>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    // Space between the top of the screen and the container
    flex: 1,
    backgroundColor: '#E0F7FA', // Light blue background color
  },
  header: {
    backgroundColor: '#FFFFFF', // White background for the header
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8, // Space between the back button and the title
  },
  content: {
    padding: 20, // Add padding to the content
  },
  input: {
    backgroundColor: '#FFFFFF', // White background for inputs
    padding: 12,
    borderRadius: 24, // More rounded inputs
    marginBottom: 16,
    color: '#000000', // Black text color
  },
  submitButton: {
    backgroundColor: '#00796B', // Blue button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24, // Rounded button
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  loadingContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});