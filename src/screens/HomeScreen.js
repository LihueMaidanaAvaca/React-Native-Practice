import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native';
import LoginForm from '../components/LoginForm';

export default function HomeScreen(props) {
  const { navigation } = props;
  
  const goToSettings = () => {
    navigation.navigate("Settings")
  }

  return (
    <View style={styles.container}>
      <LoginForm/>
      <Button onPress={goToSettings} title="Go Set"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
