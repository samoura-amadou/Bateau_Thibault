import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import MyButton from '../button/MyButton';
import MyButton1 from '../button/noIconButton';

const Vue2 = ({ navigation }) => {
  const handlePress30 = () => {
    navigation.navigate('Vue30');
  };

  const handlePress31 = () => {
    navigation.navigate('Vue31');
  };

  const handlePress32 = () => {
    navigation.navigate('Vue32');
  };

  const handlePress33 = () => {
    navigation.navigate('Vue33');
  };

  const handlePress34 = () => {
    navigation.navigate('Vue34');
  };

  const handlePress1 = () => {
    navigation.navigate('Vue1');
  };


  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Text style={styles.styletext1}>Nos bateaux partenaires</Text>
            <Text style={styles.styletext2}>06.63.99.99.78</Text>
            <Text style={styles.styletext2}>lebateaudethibault@gmail.com</Text>
            <Text style={styles.styletext2}>www.facebook/lebateaudethibault</Text>
          </View>

        <View style={styles.buttonGroup}>
          <MyButton1
            label="Bistro des Gascons"
            onPress={handlePress30}
            style={styles.fullWidthButton}
          />

          <MyButton1
            label="Les fous de l'île"
            onPress={handlePress31}
            style={styles.fullWidthButton}
          />
        </View>

        <View style={styles.buttonGroup}>
          <MyButton1
            label="Bistrot Landais"
            labelFontSize={10}
            onPress={handlePress32}
            style={styles.fullWidthButton}
          />

          <MyButton1
            label="Villa 9-Trois"
            onPress={handlePress33}
            style={styles.fullWidthButton}
          />
        </View>

        <View style={styles.buttonGroup}>
          <MyButton1
            label="Bistro du Sommelier"
            onPress={handlePress34}
            style={styles.fullWidthButton}
          />

          <MyButton1
            label="Devenez partenaire!"
            onPress={handlePress1}
           // style={styles.fullWidthButton}
          />
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
    width: '100%',
  },
  text: {
    fontFamily: 'italic',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    justifyContent: 'center',
  },
  styletext1:{
    color: 'white',
    fontFamily: "italic",
    fontSize: 30,
    paddingBottom: '10vh',
    fontStyle:'italic',
    textAlign: 'center',
  },
  styletext2:{
    color: 'grey',
    fontFamily: "italic",
    textAlign: 'center',
    lineHeight: 20,
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

export default Vue2;
