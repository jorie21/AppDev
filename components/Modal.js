import React from 'react';
import { View, Text, Modal, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FoodModal = ({ visible, onClose, title, description, ingredients = [], steps = [] }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView 
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled" // Ensures taps are handled properly
            showsVerticalScrollIndicator={false} // Optional for cleaner UI
          >
            {/* Title */}
            <Text style={styles.modalTitle}>{title}</Text>

            {/* Description */}
            <Text style={styles.modalDescription}>{description}</Text>

            {/* Ingredients Title */}
            <Text style={styles.sectionTitle}>Ingredients</Text>

            {/* Ingredients List */}
            <View style={styles.ingredientsList}>
              {ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredientItem}>
                  - {ingredient}
                </Text>
              ))}
            </View>

            {/* Cooking Steps Title */}
            <Text style={styles.sectionTitle}>Steps</Text>

            {/* Steps List */}
            <View style={styles.stepsList}>
              {steps.map((step, index) => (
                <Text key={index} style={styles.stepItem}>
                  {index + 1}. {step}
                </Text>
              ))}
            </View>
          </ScrollView>

          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%', // Adjust the height as needed
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Add some padding at the bottom for better spacing
  },
  modalTitle: {
    fontFamily: 'Actor',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontFamily: 'Actor',
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: 'Actor',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ingredientsList: {
    marginTop: 10,
  },
  ingredientItem: {
    fontFamily: 'Actor',
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  stepsList: {
    marginTop: 10,
  },
  stepItem: {
    fontFamily: 'Actor',
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF', // Adjust color as needed
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default FoodModal;
