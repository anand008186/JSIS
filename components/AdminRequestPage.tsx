import React from 'react';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';

interface AdminRequestPageProps {
  forms: { field1: string; field2: string; status?: string }[];
  handleApproveReject: (index: number, action: string) => void;
}

export default function AdminRequestPage({ forms, handleApproveReject }: AdminRequestPageProps) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Admin Permit Requests</Text>
      {forms.map((form, index) => (
        <View key={index} style={styles.formItem}>
          <Text>{`Form ${index + 1}`}</Text>
          <Text>{form.field1}</Text>
          <Text>{form.field2}</Text>
          {/* Display more fields as needed */}
          <Button title="Approve" onPress={() => handleApproveReject(index, 'Approved')} />
          <Button title="Reject" onPress={() => handleApproveReject(index, 'Rejected')} />
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