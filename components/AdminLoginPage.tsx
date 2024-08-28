import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the back arrow icon

export default function AdminLoginPage() {
  const [employeeId, setLocalEmployeeId] = useState('');
  const [password, setLocalPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!employeeId || !password) {
      setError('Both fields are required');
      return;
    }
    setError('');

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32, // Space between the top of the screen and the container
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
});