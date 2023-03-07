import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
  const {navigation} = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName)
  }

  return (
    <View>
      <Text>Estamos en stettings</Text>
      <Text>Estamos en stettings</Text>
      <Text>Estamos en stettings</Text>
      <Text>Estamos en stettings</Text>
      <Button onPress={() => goToPage("Home")} title="Go Home"/>
    </View>
  )
}