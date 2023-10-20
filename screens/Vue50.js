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



// import { Pressable, StyleSheet, Text, ImageBackground, View } from 'react-native';
// import React, { useState, useEffect } from 'react';

// const Vue50 = ({ navigation }) => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     // Charger le fichier JSON depuis le dossier assets
//     const jsonData = require('../data/poissons.json');
//     setJsonData(jsonData);
//   }, []);

//   return (
//     <ImageBackground
//       source={require('../assets/images/background.png')}
//       style={styles.imageBackground}
//       resizeMode="cover"
//     >
//       <View style={styles.container}>
//         <Text style={styles.text}>Bienvenue sur mon application</Text>
//         <Text style={styles.text}>Je m'appelle Thibault</Text>

//         {jsonData.map((item, index) => (
//           <View key={index} style={styles.jsonData}>
//             <Text>Nom : {item.name}</Text>
//             <Text>Prix : {item.price} €</Text>
//           </View>
//         ))}
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
//   imageBackground: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   jsonData: {
//     fontSize: 16,
//     margin: 20,
//     textAlign: 'center',
//   },
// });

// export default Vue50;
