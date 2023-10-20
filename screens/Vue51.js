/*import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
import React from 'react';

const Vue0 = ({navigation}) => {

    const handlePress = () => {
        <button onClick={handlePress}>Vue1</button>
        navigation.navigate('Vue1')
    }


  return (
    <ImageBackground 
      source={require('../assets/images/background.png')}
      style={styles.imageBackground} // Set styles for the ImageBackground
      resizeMode="cover" // Adjust this to control how the image scales
>

        <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur mon application</Text>
        <Text style={styles.text}>Je m'appelle Thibault</Text>
    </View>
    </ImageBackground >
  )
  
}

export default Vue0

const styles = StyleSheet.create({
    container: {
        
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      color: 'blue',
    }, 
    btn:{
        padding: 10,
        color: 'white',
        borderRadius: 10,
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 30,
        margin: 10,
        transitionDuration: 0.4,
    }, 
    imageBackground: {
        flex: 1, // Ensure the image fills the entire container
        width: '100%', // Set the width to 100% of the container
        height: '100%', // Set the height to 100% of the container
      },


})*/


import React from 'react';
import { Pressable, StyleSheet, Text, ImageBackground, View } from 'react-native';
import MyButton from '../button/MyButton';
import productsData from '../data/poissons.json'; // Remplacez 'votreFichier.json' par le chemin réel vers votre fichier JSON
import Navbar from '../navebar/navbar';
import MyButton1 from '../button/MyButton1';

const Vue50 = ({ navigation }) => {
  const products = productsData;

  const renderProductButtons = () => {
    return products.map((product, index) => (
      <MyButton1
        key={index}
        label={`${product.name}       ${product.price} €`}
        iconSource={require('../assets/images/poulpe.png')} // Change this to the correct icon source
      />
    ));
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Navbar></Navbar>

        <View style={styles.productList}>{renderProductButtons()}</View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    display: 'block',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  productList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default Vue50;
