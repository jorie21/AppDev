import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import UserCard from '../components/UserCard'; 
import { MembersData } from '../constant/MembersData';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Logo/UlamPediaLogo.png')} 
        style={{ height: 100, width: 101, marginTop: 30 }} 
      />
      <View style={styles.line} />

      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.description}>
            UlamPedia, the definitive guide to mastering the craft of home economics focusing on cooking. Whether you're a first-time or experienced home cook, this application will help you improve your cooking skills and save time. We offer a comprehensive platform for discovering simple recipes and managing your kitchen efficiently.
          </Text>

          <Text style={styles.aboutUsTitle}>About Us</Text>

          {MembersData.map(data => (
            <UserCard
              key={data.userName}
              userName={data.userName}
              imageSource={data.imageSource}
              userDescription={data.userDescription}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f9f9f9', 
    
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginTop: 20,
  },
  scrollContainer: {
    paddingBottom: 20, 
    paddingHorizontal: 20, 
  },
  innerContainer: {
    padding: 20, 
    flexGrow: 1, 
  },
  description: {
    fontFamily: 'Actor',
    textAlign: 'justify',
    marginBottom: 20, // Added margin for spacing
  },
  aboutUsTitle: {
    fontFamily: 'SofiaSans',
    marginTop: 27,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
