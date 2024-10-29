import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FoodModal from './Modal'; // Import the modal component

const FoodCard = ({ imageSource, title, description, ingredients, steps }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);  // Show the modal when the image or button is pressed
  };

  const closeModal = () => {
    setModalVisible(false);  // Close the modal
  };

  return (
    <View style={{ width: '100%', marginTop: 15 }}>
      {/* Main card */}
      <View style={styles.shadowContainer}>
        <View style={styles.mainCards}>
          <Image source={imageSource} style={styles.mainImageCard} />
          <View style={{ flexDirection: 'column', width: 180 }}>
            <Text style={{ fontFamily: 'Actor', fontSize: 20 }}>{title}</Text>
            <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">
              {description}
            </Text>
          </View>
          <TouchableOpacity style={styles.arrowIcon} onPress={handlePress}>
            <Image source={require('../assets/Icon/Arrow_Right_Small.png')} style={{ height: 50, width: 50 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Render the modal and pass props */}
      <FoodModal
        visible={modalVisible}
        onClose={closeModal}
        title={title}
        description={description}
        ingredients={ingredients}
        steps={steps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    width: '100%',
    borderRadius: 50, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, 
  },
  mainCards: {
    width: '100%',
    gap: 20,
    padding: 6,
    justifyContent: 'space-around',
    borderRadius: 25, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainImageCard: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginLeft: 8,
  },
  arrowIcon: {
    padding: 10,
  },
  description: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#555',
    opacity: 0.6,
    marginTop: 5,
  },
});

export default FoodCard;
