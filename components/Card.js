import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 8,
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15
  }
})

export default Card;