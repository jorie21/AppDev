import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LoginButton from '../components/LoginButton'


const StartingPage = () => {

  const navigation = useNavigation()

  return (
  <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/Logo/UlamPediaLogo.png")} style={styles.image} />
        </View>
        <Text style={styles.textFont}>Your Favorite Meals is Here!</Text>

        <View  style={styles.buttonContainer} >
           <LoginButton onPress={() => navigation.navigate('Login')} title="Login"/>
          
          <LoginButton  bgColor="#DADADA" title="Register" textColor='#000' onPress={() => navigation.navigate('Registration Form')} /> 
        </View>
  </View>
  )
}

export default StartingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    imageContainer: {
        marginTop: 125
    },
    image: {
        width: 291,
        height: 268,
      },

      buttonContainer: {
        gap: 20,
        marginTop: 146
      },

      buttonTwo: {
        justifyContent: 'center',
        backgroundColor: '#DADADA', 
        height: 54,
        width: 339,
        borderRadius: 15, 
      },
      buttonTextTwo: {
        textAlign: 'center',
        color: '#000102',
        fontFamily: 'Outfit',
        fontSize: 16,
        fontWeight: 'bold'
      },
      textFont: {
        fontFamily: 'Poppins',
        fontSize: 12,
        marginTop: 17
      }
})