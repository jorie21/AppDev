import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import FoodCard from '../components/FoodCard';
import { FoodData } from '../constant/FoodData';
import { RecipeData } from '../constant/RecipeData';



const Home = () => {

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar placeholder="Search" />
      </View>


        <Text style={{fontFamily:'Poppins', fontWeight: 'bold', fontSize: 16,  marginTop: 30, color: '#0A2533'}}>Popular Recipes</Text>
        <View style={styles.cardsContainer}>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardsContainer}>
         {RecipeData.map(data => (
          <RecipeCard
            key={data.id}
            image={data.image}
            title={data.title}
            description={data.description}
            ingredients={data.ingredients}
            steps={data.steps}
          />
        ))}
          </ScrollView>
        </View>
        <Text style={{fontFamily:'SofiaSans', fontWeight: 'bold', fontSize: 16, marginTop: 30, color: '#0A2533'}}>Editor's Choice</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
               {FoodData.map(data => (
                <FoodCard 
                  key={data.title}
                  title={data.title}
                  description={data.description}
                  imageSource={data.image}
                  ingredients={data.ingredients}
                  steps={data.steps}
                />
               ))}
            </ScrollView>


          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20
  },
  searchContainer:{
    marginTop: 70,
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    
  },
  
});

export default Home;
