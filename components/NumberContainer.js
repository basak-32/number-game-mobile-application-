import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: 'pink',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  number: {
    color: 'pink',
    fontSize: 24
  }
})

export default NumberContainer;