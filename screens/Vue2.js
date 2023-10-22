import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import MyButton from '../button/MyButton';

const Vue2 = ({ navigation }) => {
  const handlePress20 = () => {
    navigation.navigate('Vue20');
  };

  const handlePress21 = () => {
    navigation.navigate('Vue21');
  };

  const handlePress22 = () => {
    navigation.navigate('Vue22');
  };

  const handlePress23 = () => {
    navigation.navigate('Vue23');
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
          <MyButton
            label="De la Brise"
            iconSource={require('../assets/images/deLaBrise_icon.png')}
            onPress={handlePress20}
            style={styles.fullWidthButton}
          />

          <MyButton
            label="Saphir"
            iconSource={require('../assets/images/saphir_icon.png')}
            onPress={handlePress21}
            style={styles.fullWidthButton}
          />
        </View>

        <View style={styles.buttonGroup}>
          <MyButton
            label="Gast Micher"
            labelFontSize={10}
            iconSource={require('../assets/images/gastMicher_icon.png')}
            onPress={handlePress22}
            style={styles.fullWidthButton}
          />

          <MyButton
            label="Aquillon"
            iconSource={require('../assets/images/aquilon_icon.png')}
            onPress={handlePress23}
            style={styles.fullWidthButton}
          />
        </View>

        <View style={styles.buttonGroup}>
          <MyButton
            label="Contact"
            iconSource={require('../assets/images/ancre.png')}
            onPress={handlePress1}
            style={styles.fullWidthButton}
          />

          <MyButton
            label="Contact"
            iconSource={require('../assets/images/ancre.png')}
            onPress={handlePress1}
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
    fontStyle:'italic'
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
