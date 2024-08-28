import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for the back icon
import { AppContext,AppContextProps } from '@/context/AppContext';
export default function EmployeeHistoryPage() {

  const { employeeHistory } = React.useContext(AppContext) as AppContextProps;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Employee History</Text>
      </View>
      <ScrollView style={styles.content}>
        {employeeHistory.map((form, index) => (
          <View key={index} style={styles.formItem}>
            <Text>{`Form ${index + 1}`}</Text>
            <Text>{form.field1}</Text>
            <Text>{form.field2}</Text>
            {/* Display more fields as needed */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formItem: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});