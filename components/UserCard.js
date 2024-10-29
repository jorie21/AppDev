import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const UserCard = ({ imageSource, userName, userDescription }) => {
  return (
    <View style={styles.userCards}>
      <Image source={imageSource} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userDescription} numberOfLines={6} ellipsizeMode="tail">
          {userDescription}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userCards: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    width: '100%',
    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  userImage: {
    height: 129,
    width: 99,
    borderRadius: 15,
  },
  userInfo: {
    paddingLeft: 15,
    flex: 1,
    gap: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Actor',
    fontSize: 16,
  },
  userDescription: {
    textAlign: 'justify',
    fontFamily: 'Actor',
    fontSize: 11,
  },
});

export default UserCard;
