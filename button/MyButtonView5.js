import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const MyButton = ({ label, iconSource, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? 'lightgray' : 'rgba(100, 100, 100, 0.7)', 
        opacity:25,
        }, styles.fullWidthButton
      ]}
      onPress={onPress}
    >
      <Image source={iconSource} style={styles.icon} />
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // Aligne l'icône et le texte horizontalement
    alignItems: 'center', // Centre l'icône et le texte verticalement
    padding: 10,
    margin: 10,
    width: '100%',
  },
  icon: {
    width: 90, // Ajustez la largeur de l'icône en conséquence
    height: 90, // Ajustez la hauteur de l'icône en conséquence
    marginRight: 10, // Marge à droite de l'icône pour séparer du texte
    
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    justifyContent: 'center',
  },
  fullWidthButton: {
    width: '97%',
    height: '20%', // Le bouton occupera 100% de la largeur
    border: '2px solid black',
  },
});

export default MyButton;
