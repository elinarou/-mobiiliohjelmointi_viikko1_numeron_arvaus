import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [message, setMessage] = useState('Guess a number between 1-100');

  const buttonPressed = () => {
    if (guess > number) {
      setMessage('Your guess ' + guess + ' is too high')
      setTotalGuesses(totalGuesses + 1);
    }
    else if (guess < number) {
      setMessage('Your guess ' + guess + ' is too low')
      setTotalGuesses(totalGuesses + 1);
    }
    else {
      setNumber(Math.floor(Math.random() * 100) + 1);
      Alert.alert('You guessed the number in ' + totalGuesses + ' guesses');
    }
  }; 

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setGuess(text)} 
        value={guess}
        keyboardType="numeric" 
      />
      <Button onPress={buttonPressed} title="Make guess"/>
      <StatusBar style="auto" />
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

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
  },
});
