import React, { useState } from "react";
import { TextInput, Button, View, TouchableOpacity, Text } from "react-native";
import SettingsScreen from "../screens/SettingsScreen";


export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return(
        <View>
            <TextInput placeholder="Email"/>
            <TextInput 
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}/>
            <TouchableOpacity onPress={toggleShowPassword}>
            <Text>{showPassword ? 'Hide' : 'Show'} Password</Text>
            </TouchableOpacity>  
            <Button title="Enviar" onPress={() => SettingsScreen} />
        </View>
    )
}

