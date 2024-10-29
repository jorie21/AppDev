import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LoginButton = ({ onPress, style, title, bgColor, textColor }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: bgColor || '#042628' }]} 
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    height: 54,
    width: 339,
    borderRadius: 25,
    elevation: 5, // lower elevation for a softer shadow
    shadowColor: '#000', // subtle shadow color
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Outfit',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
