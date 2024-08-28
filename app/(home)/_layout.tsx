import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppContext ,AppContextProps} from '@/context/AppContext'
import { Stack } from 'expo-router'

const Home = () => {

    const {role} = React.useContext(AppContext) as AppContextProps
  return (
  <Stack 
  screenOptions={
    {
      headerShown: false
    }
  }
  >
    {
      role == 'admin' ? <Stack.Screen name="(admin)" /> : <Stack.Screen name="(employee)" />
    }
</Stack>
  )
}

export default Home

const styles = StyleSheet.create({})