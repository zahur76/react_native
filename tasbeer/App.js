import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)

  const [fontsLoaded] = useFonts({
    'luckyGuy': require('./assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  return (

    <View style={styles.container}>
      <StatusBar translucent={true}></StatusBar>
      <ImageBackground source={require('./assets/OIP.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.header} >My Tasbeer</Text>
        <Text style={styles.counter} >{counter}</Text>
        <TouchableOpacity style={styles.roundButton} onPress={() => setCounter(counter + 1)}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCounter(0)}>
          <Text style={styles.button}>RESET</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  image: {
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'luckyGuy',
    textAlign: 'center',
    margin: 40
  },
  counter: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginTop: 150,
    marginBottom: 30,
    marginHorizontal: 100,
    fontSize: 50,
    borderRadius: 10,
    opacity: 0.7,
    color: 'red'
  },
  roundButton: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'red',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 10,
  },
  button: {
    color: 'red',
    fontSize: 28,
    fontFamily: 'luckyGuy',
    textAlign: 'center',
    marginTop: 200
  }
});
