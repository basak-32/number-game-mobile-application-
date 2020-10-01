import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [finalNumber, setFinalNumber] = useState('');

  const numberInputHandler = input => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    setIsConfirmed(false);
  }

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid Number!!', 
        'The number should be between 1 and 99', 
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return;
    }
    setIsConfirmed(true);
    setFinalNumber(choosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  }

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.confirmSummary}>
        <Text>You selected</Text>
        <NumberContainer>{finalNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(finalNumber)} />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress = {
        () => {
          Keyboard.dismiss();
        }
      }
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a number of your choice</Text>
          <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCapitalize='none' 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} /></View>
            <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} /></View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },

  title: {
    fontSize: 20,
    marginVertical: 10
  },

  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },

  button: {
    width: 85
  },

  input: {
    width: 50,
    height: 40,
    textAlign: 'center',
    marginVertical: 30
  },

  confirmSummary: {
    marginVertical: 15,
    alignItems: 'center'
  }
});

export default StartScreen;