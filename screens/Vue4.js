import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import MyButton from '../button/MyButton';

const Vue2 = ({ navigation }) => {
  const handlePress40 = () => {
    navigation.navigate('Vue40');
  };

  const handlePress41 = () => {
    navigation.navigate('Vue41');
  };

  const handlePress42 = () => {
    navigation.navigate('Vue42');
  };

  const handlePress43 = () => {
    navigation.navigate('Vue43');
  };

  const handlePress44 = () => {
    navigation.navigate('Vue44');
  };


  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Text style={styles.styletext1}>Nos recettes</Text>
            <Text style={styles.styletext2}>Toutes nos recettes bateau Thibault</Text>
            <Text style={styles.styletext2}>06.63.99.99.78</Text>
            <Text style={styles.styletext2}>lebateaudethibault@gmail.com</Text>
            <Text style={styles.styletext2}>www.facebook/lebateaudethibault</Text>
          </View>

        <View style={styles.buttonGroup}>
          <MyButton
            label="Homard"
            iconSource={require('../assets/images/homardRecette_icon.png')}
            onPress={handlePress40}
            style={styles.fullWidthButton}
          />

          <MyButton
            label="St Jacques"
            iconSource={require('../assets/images/saintJacques_icon.png')}
            onPress={handlePress41}
            style={styles.fullWidthButton}
          />
        </View>

        <View style={styles.buttonGroup}>
          <MyButton
            label="Bar"
            iconSource={require('../assets/images/barRecette_icon.png')}
            onPress={handlePress42}
            style={styles.fullWidthButton}
          />

          <MyButton
            label="Tourteau"
            iconSource={require('../assets/images/poulpe.png')}
            onPress={handlePress43}
            style={styles.fullWidthButton}
          />
        </View>

        <View style={styles.buttonGroup}>
          <MyButton
            label="Recette"
            iconSource={require('../assets/images/poulpe.png')}
            onPress={handlePress44}
            style={styles.fullWidthButton}
          />

          <MyButton
            label="Recette"
            iconSource={require('../assets/images/poulpe.png')}
            onPress={handlePress44}
            style={styles.fullWidthButton}
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