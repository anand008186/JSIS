import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import MainPage from '@/components/MainPage'

const index = () => {

  useEffect(() => {
    console.log('auth index')
  }
  , [])

  return (
  <MainPage />
  )
}

export default index

const styles = StyleSheet.create({})