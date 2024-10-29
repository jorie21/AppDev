import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginButton from '../components/LoginButton'
import Login from './Login'
import { useNavigation } from '@react-navigation/native'

const RegisterForm = () => {

    const nav = useNavigation()

  return (
    <View style={styles.container}>
        <Image source={require('../assets/Logo/UlamPediaLogo.png')} style={styles.image} />

        {/* text inputs */}
        <View style={styles.inputMain}>
            <View style={styles.inputContainer}>
                <TextInput  placeholder='Firtsname' style={styles.input} placeholderTextColor="rgba(0, 0, 0, 0.4)"/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput  placeholder='Lastname' style={styles.input} placeholderTextColor="rgba(0, 0, 0, 0.4)"/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput  placeholder='Email Address' style={styles.input} placeholderTextColor="rgba(0, 0, 0, 0.4)"/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput  placeholder='Password' style={styles.input} placeholderTextColor="rgba(0, 0, 0, 0.4)"/>
            </View>
        </View>

        <LoginButton  title="Submit" style={{marginTop: 40}} />
        <Text  style={{marginTop:10, opacity: 0.6, fontFamily: 'Abeezee'}} >or log in with</Text>

        <View  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 42 }}>
            <Image source={require('../assets/Icon/facebook.png')} style={{marginRight: 44}}/>
            <Image source={require('../assets/Icon/Gmail.png')} />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 80, }}>
            <Text style={{fontFamily: 'Abeezee'}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => nav.navigate('Login')}>
                <Text style={{ color: 'blue', fontFamily: 'Abeezee' }}>Login</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default RegisterForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 106,
        height: 100,
        marginTop: 29
    },
    
    inputMain: {
        marginTop: 29
    },

    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        fontFamily: 'Abeezee',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25, 
        paddingHorizontal: 20,
        marginVertical: 10,
        width: 340,
        height: 54,
        marginTop: 5,
        backgroundColor: '#fff',
       
        elevation: 4, // lower elevation for a softer shadow
        shadowColor: '#000', // subtle shadow color
    },
});

