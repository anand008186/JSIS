import React, { useEffect } from 'react';
import { ScrollView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext, AppContextProps } from '@/context/AppContext';
import { handleApproveReject } from '@/api/firebaseApi';
import { Ionicons } from '@expo/vector-icons'; // Import for the back icon
import { useRouter } from 'expo-router';

export default function AdminRequestPage() {
  const router = useRouter();
  const { adminRequests, fetchAdminRequests } = React.useContext(AppContext) as AppContextProps;

  useEffect(() => {
    fetchAdminRequests();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.dismiss(1)}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Permit Requests</Text>
      </View>
      <ScrollView style={styles.content}>
        {adminRequests.filter((form) => form.status === 'pending').map((form, index) => {
          console.log(form);
          const createdAtDate = form.createdAt.toDate(); // Convert Firestore Timestamp to Date
          const formattedDate = createdAtDate.toLocaleDateString(); // Format the date as needed

          return (
            <View key={index} style={styles.formItem}>
              <Text>{`Form ${index + 1}`}</Text>
              <Text>{form.userEmail}</Text>
              <Text>{formattedDate}</Text>
              {/* Display more fields as needed */}
              <Button title="Approve" onPress={() => handleApproveReject(form.id, 'Approved')} />
              <Button title="Reject" onPress={() => handleApproveReject(form.id, 'Rejected')} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#E0F7FA',
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
    paddingLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
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