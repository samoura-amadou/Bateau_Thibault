import { StyleSheet, Text, ImageBackground, View, Image } from 'react-native';
import React from 'react';

import MyButton from '../button/MyButton';

const Vue1 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Vue1');
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>



        {/* Conteneur pour l'image en haut */}
        <View style={styles.imageContainer}>
          <Text style={styles.styletext1}>Le bateau de Thibault</Text>
          <Image source={require('../assets/images/saphir.png')} style={styles.image} />
          <Text style={styles.styletext2}>06.63.99.99.78</Text>
          <Text style={styles.styletext2}>lebateaudethibault@gmail.com</Text>
          <Text style={styles.styletext2}>www.facebook/lebateaudethibault</Text>
        </View>
       
        {/* Conteneur pour le texte et la description en bas */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>Qu'il est chaud le soleil hgliyvlyv</Text>
          <Text style={styles.text}>Quand nous sommes en vacances</Text>
          <Text style={styles.text}>Y a d'la joie, des hirondelles</Text>
          <Text style={styles.text}>C'est le sud de la France</Text>
          <Text style={styles.text}>Papa bricole au garage</Text>
          <Text style={styles.text}>Maman lit dans la chaise longue</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>Que de bonheur!</Text>
          <Text style={styles.text}>Que de bonheur!</Text>

          {/* <Text style={styles.description}>Je m'appelle Thibault</Text> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '20%',
  },
  imageContainer: {
    marginTop: '25vh',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
  },
  text: {
    fontSize: 10,
    fontWeight: '',
    color: 'grey',
    fontFamily: 'italic',
  },
  headerText: {
    fontFamily:'italic',
    fontSize: 30,
    color: 'white',
    fontStyle: 'italic',
    marginBottom: '5vh',
    },
  description: {
    fontSize: 16,
    color: 'black',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: 200,
    height: 250,
  },
  styletext1:{
    color: 'white',
    // fontFamily: 'tattoo-script',
    fontFamily: "italic",
    fontSize: 30,
    paddingBottom: 20,
  },
  styletext2:{
    color: 'grey',
    fontFamily: 'cursive',

  },
});


export default Vue1;