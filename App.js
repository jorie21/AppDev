import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingPage from "./Pages/StartingPage";
import { useFonts } from "expo-font";
import Login from "./Pages/Login";
import RegisterForm from "./Pages/RegisterForm";
import Tabs from './Tabs/Indexe'



const stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    Outfit: require('./assets/fonts/Outfit-Regular.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    Londrina: require('./assets/fonts/LondrinaSketch-Regular.ttf'),
    Abeezee: require('./assets/fonts/ABeeZee-Regular.ttf'),
    SofiaSans: require('./assets/fonts/SofiaSans-Bold.ttf'),
    Actor: require('./assets/fonts/Actor-Regular.ttf')

  });

  return (
   <NavigationContainer >
    <stack.Navigator  initialRouteName="StartingPage">
    <stack.Screen name="Welcome Page" component={StartingPage}  options={{ headerStyle: { backgroundColor: '#fff',}, headerTintColor: '#000', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 15, fontWeight: '500' } }} />
    <stack.Screen name="Login" component={Login} options={{ headerStyle: { backgroundColor: '#fff',}, headerTintColor: '#000', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 15, fontWeight: '500' } }}/>
    <stack.Screen name="Registration Form" component={RegisterForm} options={{ headerStyle: { backgroundColor: '#fff',}, headerTintColor: '#000', headerTitleAlign: 'center', headerTitleStyle: { fontSize: 15, fontWeight: '500' } }} />
    <stack.Screen name= "Tabs" component={Tabs} options={{headerShown: false}}/>
    </stack.Navigator>
   </NavigationContainer>
  );
}

