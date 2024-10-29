import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

  const nav = useNavigation()

  const handleLogin = () => {
    nav.navigate('Tabs');
  };

  return (
    <View style={styles.container}>
        <View  style={styles.ImageContainer} >
            <Image source={require('../assets/Logo/LoginLogo.png')} style={styles.image} />
        </View>

        <View style={styles.textInputContainer}>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="user" size={20} color="#7BA7D7" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Username"  placeholderTextColor="rgba(0, 0, 0, 0.4)"/>
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="lock" size={20} color="#7BA7D7" style={styles.icon} />
                <TextInput style={styles.input} placeholder="Password"  placeholderTextColor="rgba(0, 0, 0, 0.4)"/>
            </View>
        </View>
        <Text style={styles.TextForgot} >Forgot Password?</Text>
        <LoginButton  style={{marginTop: 75}}  title="Login" onPress={handleLogin}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 291,
        height: 268,
    },
    ImageContainer: {
        marginTop: 115,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc', // Subtle border
        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 10,
        width: 340,
        height: 54,
        backgroundColor: '#fff',
        // Shadow for Android
        elevation: 4, // Adjust elevation for soft shadow
        shadowColor: '#000', // Shadow color
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        fontFamily: 'Abeezee',
    },
    TextForgot: {
        alignSelf: 'flex-end',
        paddingRight: 50,
        color: '#7BA7D7' 
    }
});
