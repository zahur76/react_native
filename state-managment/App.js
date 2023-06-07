import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { loginContext } from './Contexts/Context.js'
import Home from './Components/Home/Home.js'
import Login from './Components/Login/Login.js'


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
