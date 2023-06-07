import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useState, createContext, useContext } from 'react';

const loginContext = createContext({});

function Home() {

  const { setLogin } = useContext(loginContext);

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <StatusBar style="auto" />
      <Pressable>
        <Button color="#ff5c5c" title='click me' onPress={() => setLogin(true)}></Button>
      </Pressable>
    </View>
  )
}

function Login() {

  const { setLogin } = useContext(loginContext);

  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <StatusBar style="auto" />
      <Pressable>
        <Button color="#ff5c5c" title='click me' onPress={() => setLogin(false)}></Button>
      </Pressable>
    </View>
  )
}

export default function App() {

  const [login, setLogin] = useState(false)

  return (
    <View style={styles.container}>
      <loginContext.Provider value={{ login, setLogin }}>
        {login ? <Login /> : <Home />}
      </loginContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
