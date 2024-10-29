import { StyleSheet, View, Animated, Easing } from 'react-native';
import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'; 
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import Setting from '../screens/Setting';
import UserProfile from '../screens/UserProfile';

const Tab = createBottomTabNavigator(); 

const Indexe = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#ffffff', 
          borderTopWidth: 0, 
          height: 70, // Set your desired height
          paddingBottom: 10, // Add bottom padding for more space
          paddingTop: 10, // Add top padding for more space
        },
        tabBarActiveTintColor: '#7BA7D7', 
        tabBarInactiveTintColor: '#7BA7D7', 
        tabBarLabelStyle: {
          display: 'none', 
        },
      }}
    >
      {/** Home Tab **/}
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name='home' color={color} focused={focused}  />
          ),
          tabBarLabel: '', 
        }} 
      />
      {/** UserProfile Tab **/}
      <Tab.Screen 
        name='UserProfile' 
        component={UserProfile} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name='person' color={color} focused={focused} />
          ),
          tabBarLabel: '', 
        }} 
      />
      {/** Setting Tab **/}
      <Tab.Screen 
        name='Setting' 
        component={Setting} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name='settings' color={color} focused={focused} />
          ),
          tabBarLabel: '', 

        }} 
      />
      {/** AboutUs Tab **/}
      <Tab.Screen 
        name='AboutUs' 
        component={AboutUs} 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <AnimatedIcon name='information-circle' color={color} focused={focused} />
          ),
          tabBarLabel: '', 
        }} 
      />
    </Tab.Navigator>
  );
};

const AnimatedIcon = ({ name, color, focused }) => {
  const scale = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.2 : 1, 
      duration: 150, 
      easing: Easing.out(Easing.ease), 
      useNativeDriver: true, 
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Ionicons name={name} size={22} color={color} />
    </Animated.View>
  );
};

export default Indexe;

const styles = StyleSheet.create({});
