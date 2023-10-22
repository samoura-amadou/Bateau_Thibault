import { Pressable, StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import MyButton from '../button/MyButton';
import MyButton1 from '../button/MyButton1';
const Vue0 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Vue1');
  };

  const handlePress2 = () => {
    navigation.navigate('Vue2');
  }

  const handlePress3 = () => {
    navigation.navigate('Vue3');
  }

  const handlePress4 = () => {
    navigation.navigate('Vue4');
  }

  const handlePress5 = () => {
    navigation.navigate('Vue5');
  }

  const handlePress0 = () => {
    navigation.navigate('Vue5');
  };


  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur mon application</Text>
        <Text style={styles.text}>Je m'appelle Thibault</Text>

        <View style={styles.button1}>
        <MyButton1
          label="Produits et promotions"
          iconSource={require('../assets/images/poisson.png')}
          onPress={handlePress0}
          style={[styles.button1]}
        />
        </View>

        <View style={styles.buttonGroup}>
        <MyButton
          label="Bateaux"
          iconSource={require('../assets/images/ancre.png')}
          onPress={handlePress2}
          style={styles.buttonSpacing}
        />

        <MyButton
          label="Restaurants"
          iconSource={require('../assets/images/restaurant.png')}
          onPress={handlePress3}
          style={styles.buttonSpacing}
        />
        </View>

        <View style={styles.buttonGroup}>
        <MyButton
          label="Recettes"
          iconSource={require('../assets/images/recette.png')}
          onPress={handlePress4}
          style={styles.buttonSpacing}
        />

        <MyButton
          label="Contact"
          iconSource={require('../assets/images/tourteau.png')} 
          onPress={handlePress}
          style={styles.buttonSpacing}
        />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Vue0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontFamily: 'italic',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonGroup: {
    flexDirection: 'row', // Affiche les boutons en ligne horizontalement
    justifyContent: 'center', // Centre les boutons horizontalement
    alignItems: 'center', // Centre les boutons verticalement
    marginVertical:10,
    width:'68%', // Espace entre les groupes de boutons
  },
  fullWidthButton: {
    width: '100%', // Le bouton occupera 100% de la largeur
  },
  buttonSpacing: {
    marginVertical: 5,
  },
  button1:{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: "40vw",
  }
});
