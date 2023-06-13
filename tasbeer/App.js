import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Switch, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false);
  const [target, setTarget] = useState('0');

  const [fontsLoaded] = useFonts({
    'luckyGuy': require('./assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  // Play Sound
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(require('./assets/bell.wav')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  const toggleSwitch = () => {
    if (isEnabled) {
      setIsEnabled(false)
      setTarget('0')
    } else {
      setIsEnabled(true)
      setCounter(0)
    }
  }

  const onChangeTarget = (event) => {
    setTarget(event)
  }

  const counterLogic = () => {
    if (isEnabled) {
      if (counter == target - 1) {
        playSound()
        setCounter(counter + 1)
      } else if (counter == target) {
        playSound()
      }
      else {
        setCounter(counter + 1)
      }
    } else {
      setCounter(counter + 1)
    }
  }

  return (

    <View style={styles.container}>
      <StatusBar translucent={true}></StatusBar>
      <ImageBackground source={require('./assets/OIP.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.header} >My Tasbeeh</Text>
        <Text style={styles.target} >Set Target</Text>
        <Switch
          trackColor={{ false: 'g#f4f3f4', true: '#f4f3f4' }}
          thumbColor={isEnabled ? 'lightblue' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ alignSelf: 'center' }} />
        {isEnabled ?
          <TextInput
            style={styles.input} keyboardType='numeric' placeholder='0'
            onChangeText={onChangeTarget} selectionColor={'red'} /> : <View style={styles.inputEmpty}></View>}
        <Text style={styles.counter} >{counter}</Text>
        <TouchableOpacity style={styles.roundButton} onPress={counterLogic} ></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCounter(0)}>
          <Text style={styles.buttonText}>RESET</Text>
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
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'lightgrey',
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'luckyGuy',
  },
  inputEmpty: {
    height: 60,
    margin: 12,
    padding: 10,
    width: 100,
    fontWeight: 'normal',
  },
  header: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'luckyGuy',
    textAlign: 'center',
    margin: 60
  },
  target: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'luckyGuy',
    textAlign: 'center',
  },
  counter: {
    textAlign: 'center',
    fontFamily: 'luckyGuy',
    backgroundColor: 'white',
    marginTop: 50,
    marginBottom: 10,
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
    marginTop: 20
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 10,
    marginTop: 120,
    width: 100,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'luckyGuy',
  }
});
