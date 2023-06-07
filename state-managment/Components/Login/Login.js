import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Pressable } from 'react-native';
import { useContext } from 'react';
import { loginContext } from '../../Contexts/Context.js'


export default function Login() {

    const { setLogin } = useContext(loginContext);
  
    return (
      <View>
        <Text>Login Page</Text>
        <StatusBar style="auto" />
        <Pressable>
          <Button color="#ff5c5c" title='click me' onPress={() => setLogin(false)}></Button>
        </Pressable>
      </View>
    )
}