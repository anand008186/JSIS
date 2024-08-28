import { Stack } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { AppContext , AppContextProps} from '@/context/AppContext';
import MainPage from '@/components/MainPage';
import AdminHomePage from '@/components/AdminHomePage';
import EmployeeHomePage from '@/components/EmployeeHomePage';

export default function App() {

  const {currentUser,fetchUserRole, role,fetchAdminRequests} = useContext(AppContext) as AppContextProps;

  useEffect(() => {
    fetchUserRole();

    
  }
  ,[]);

  return (
   
    <View style={styles.container}>

{
          currentUser == null ? <MainPage/> : role == 'admin' ? <AdminHomePage/> : <EmployeeHomePage/>
       }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: 'red',
  },
});