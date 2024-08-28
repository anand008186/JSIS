import React, { useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native';
import { AppContext, AppContextProps } from '@/context/AppContext';
import { Ionicons } from '@expo/vector-icons'; // Import for the back icon
import { useRouter } from 'expo-router';

export default function AdminHistoryPage() {
  const router = useRouter();
  const { adminRequests,fetchAdminRequests} = React.useContext(AppContext) as AppContextProps;
  const [loading, setLoading] = React.useState(false);


  useEffect(() => {
    setLoading(true);
    fetchAdminRequests();
    setLoading(false);
  }
  , []);


  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={()=> router.dismiss(1)} >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Permit Requests</Text>
      </View>
    <ScrollView style={styles.content}>
    {adminRequests.filter((form) => form.status != "pending").map((form, index) => (
        <View key={index} style={styles.formItem}>
          <Text>{`Form ${index + 1}`}</Text>
          <Text>{form.userEmail}</Text>
          <Text>{form.createdAt}</Text>
          <Text style={form.status === 'rejected' ? styles.rejected : styles.approved}>
            {`Status: ${form.status}`}
          </Text>
          {/* Display more fields as needed */}
        </View>
      ))}
       {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#00796B" />
            </View>
          )}

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
  rejected: {
    color: 'red',
  },
  approved: {
    color: 'green',
  },
  loadingContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});