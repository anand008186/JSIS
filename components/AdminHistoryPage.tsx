import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { AppContext, AppContextProps } from '@/context/AppContext';

export default function AdminHistoryPage() {

  const { adminRequests } = React.useContext(AppContext) as AppContextProps;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Admin History</Text>
      {adminRequests.filter((form) => form.status).map((form, index) => (
        <View key={index} style={styles.formItem}>
          <Text>{`Form ${index + 1}`}</Text>
          <Text>{form.field1}</Text>
          <Text>{form.field2}</Text>
          <Text>{`Status: ${form.status}`}</Text>
          {/* Display more fields as needed */}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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