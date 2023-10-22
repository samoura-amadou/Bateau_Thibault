import { ImageBackground, View, useColorScheme } from "react-native";
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function Navbar() {
    const colorScheme = useColorScheme();
  
    return (
      <View style={styles.container}>
        
        {/* Barre supérieure avec une fine ligne d'image */}
        <Image
        source={require('../assets/images/iTunesArtwork.png')}
        style={styles.topImage}
        />

        {/* Images carrées à gauche et à droite */}
        <View style={styles.iconsContainer}>
        <Image
            source={require('../assets/images/homeLogo.png')}
            style={styles.iconImage}
            onProgress={() => console.log('onProgress')}
            // bouton de rédirection vers la page d'accueil
            handlePress={() => {
                navigation.navigate('Vue1');
              }}
        />
        <Image
        source={require('../assets/images/cartLogo.png')}
        style={styles.iconImage}
        />
        
        </View>     
    </View>
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    imageBackground: {
      flex: 1, // Ensure the image fills the entire container
      width: '100%', // Set the width to 100% of the container
      height: '100%', // Set the height to 100% of the container
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    topImage: {
      width: '100%',
      justifyContent: 'space-between',
      height: 50, // Hauteur de la barre supérieure
      overflow: 'hidden', // Masque la partie inférieure de l'image
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: 10, // Ajustez ceci selon vos besoins
    },
    iconImage: {
      width: 40, // Largeur des images carrées à gauche et à droite
      height: 40, // Hauteur des images carrées à gauche et à droite
    },
  });