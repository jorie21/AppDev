import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FoodModal from './Modal'; // Importing from modal.js

const RecipeCard = ({ image, title, description, ingredients, steps }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={image} style={styles.imageCard} />
          <Text style={{ fontFamily: 'SofiaSans', alignSelf: 'center', paddingTop: 10 }}>{title}</Text>
        </TouchableOpacity>
      </View>

      <FoodModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
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
    height: 156,
    width: 120,
    borderRadius: 50, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardContainer: {
    borderRadius: 25,
    backgroundColor: '#fff', 
    padding: 7,
    justifyContent: 'space-between',
    height: '100%', 
  },
  imageCard: {
    height: 110,
    width: 105,
    borderRadius: 25, 
  },
});

export default RecipeCard;
