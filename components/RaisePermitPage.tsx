import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, View, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Ionicons } from '@expo/vector-icons'; // Import for the back arrow icon

export default function RaisePermitPage({ formDetails, setFormDetails, handleFormSubmit, setCurrentPage }: { formDetails: any, setFormDetails: any, handleFormSubmit: any, setCurrentPage: (page: string) => void }) {
  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    let valid = true;
    let newErrors: any = {};

    const requiredFields = [
      'name',
      'department',
      'employeeId',
      'email',
      'phoneNumber',
      'address',
      'city',
      'state',
      'zipCode',
      'country',
      'checkbox1',
      'checkbox2'
    ];

    requiredFields.forEach((field) => {
      if (!formDetails[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const onSubmit = () => {
    if (validateForm()) {
      handleFormSubmit();
    } else {
      Alert.alert('Validation Error', 'Please fill all required fields.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentPage("EmployeeHome")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Raise a Permit</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, name: text })}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        
        <TextInput
          placeholder="Department"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, department: text })}
        />
        {errors.department && <Text style={styles.errorText}>{errors.department}</Text>}
        
        <TextInput
          placeholder="Employee ID"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, employeeId: text })}
        />
        {errors.employeeId && <Text style={styles.errorText}>{errors.employeeId}</Text>}
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="grey"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) => setFormDetails({ ...formDetails, email: text })}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="grey"
          style={styles.input}
          keyboardType="phone-pad"
          onChangeText={(text) => setFormDetails({ ...formDetails, phoneNumber: text })}
        />
        {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
        
        <TextInput
          placeholder="Address"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, address: text })}
        />
        {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
        
        <TextInput
          placeholder="City"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, city: text })}
        />
        {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        
        <TextInput
          placeholder="State"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, state: text })}
        />
        {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
        
        <TextInput
          placeholder="Zip Code"
          placeholderTextColor="grey"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setFormDetails({ ...formDetails, zipCode: text })}
        />
        {errors.zipCode && <Text style={styles.errorText}>{errors.zipCode}</Text>}
        
        <TextInput
          placeholder="Country"
          placeholderTextColor="grey"
          style={styles.input}
          onChangeText={(text) => setFormDetails({ ...formDetails, country: text })}
        />
        {errors.country && <Text style={styles.errorText}>{errors.country}</Text>}

        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Checkbox 1 (Yes/No)</Text>
          <CheckBox
            isChecked={formDetails.checkbox1}
            onClick={() => setFormDetails({ ...formDetails, checkbox1: !formDetails.checkbox1 })}
          />
        </View>
        {errors.checkbox1 && <Text style={styles.errorText}>{errors.checkbox1}</Text>}

        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>Checkbox 2 (Yes/No)</Text>
          <CheckBox
            isChecked={formDetails.checkbox2}
            onClick={() => setFormDetails({ ...formDetails, checkbox2: !formDetails.checkbox2 })}
          />
        </View>
        {errors.checkbox2 && <Text style={styles.errorText}>{errors.checkbox2}</Text>}

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32, // Space between the top of the screen and the container
    backgroundColor: '#E0F7FA', // Light blue background color
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#FFFFFF', // White background for the header
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8, // Space between the back button and the title
  },
  content: {
    padding: 16, // Padding for the content
  },
  input: {
    backgroundColor: '#FFFFFF', // White background for inputs
    padding: 12,
    borderRadius: 24, // Rounded input fields
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#1E88E5', // Blue button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24, // Rounded button
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});