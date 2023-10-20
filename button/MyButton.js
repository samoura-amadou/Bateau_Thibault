import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const MyButton1 = ({ label, iconSource, onPress }) => {
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
    width: '100%',
    border:'1px solid black',
  },
  icon: {
    width: 50, // Ajustez la largeur de l'icône en conséquence
    height: 50, // Ajustez la hauteur de l'icône en conséquence
    marginRight: 10, // Marge à droite de l'icône pour séparer du texte
    marginLeft: '20px',

  },
  icon2: {
    width: 50, // Ajustez la largeur de l'icône en conséquence
    height: 50, // Ajustez la hauteur de l'icône en conséquence
    marginRight: "1%", // Marge à droite de l'icône pour séparer du texte
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    justifyContent: 'center',
  },
  fullWidthButton: {
    width: '70%', // Le bouton occupera 100% de la largeur
    marginHorizontal: 5,
    height:'15vh'
  },
});

export default MyButton1;
