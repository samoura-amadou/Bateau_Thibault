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


  buttonText: {
    color: 'white', 
    fontSize: 18,
    justifyContent: 'center',
  },
  fullWidthButton: {
    width: '70%', // Le bouton occupera 100% de la largeur
    marginHorizontal: 5,
    height:'15vh',

  },
});

export default MyButton1;
