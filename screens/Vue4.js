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




















// import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
// import React from 'react';

// const Vue0 = ({navigation}) => {

//     const handlePress = () => {
//         <button onClick={handlePress}>Vue1</button>
//         navigation.navigate('Vue20')

//     }

//     const handlePress2 = () => {
//         <button onClick={handlePress2}>Vue2</button>
//         navigation.navigate('Vue21')
//     }

//     const handlePress3 = () => {
//         <button onClick={handlePress3}>Vue3</button>
//         navigation.navigate('Vue22')
//     }

//     const handlePress4 = () => {    
//         <button onClick={handlePress4}>Vue4</button>
//         navigation.navigate('Vue23')
//     }


//   return (

//     <ImageBackground 
//       source={require('../assets/images/background.png')}
//       style={styles.imageBackground} // Set styles for the ImageBackground
//       resizeMode="cover" // Adjust this to control how the image scales
// >
//         <View style={styles.container}>
//         <Text style={styles.text}>Bienvenue sur mon application</Text>
//         <Text style={styles.text}>Je m'appelle Thibault</Text>

//       <Pressable
//       style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//       onPress={handlePress}
//       >
//       <Text style={styles.btn}>Vue20</Text>
//       </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'blue', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress2}
//         >
//         <Text style={styles.btn}>Vue21</Text>
//         </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'black', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress3}
//         >
//         <Text style={styles.btn}>Vue22</Text>
//         </Pressable>
//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'green', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress4}
//         >
//         <Text style={styles.btn}>Vue23</Text>
//         </Pressable>

//     </View>
//     </ImageBackground >

    
//   )
  
  

// }


// export default Vue0

// const styles = StyleSheet.create({
//     container: {
        
//         flex: 2,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text:{
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'blue',
//     }, 
//     btn:{
//         padding: 10,
//         color: 'white',
//         borderRadius: 10,
//         textDecoration: 'none',
//         display: 'inline-block',
//         fontSize: 30,
//         margin: 10,
//         transitionDuration: 0.4,
//     }, 
//     imageBackground: {
//         flex: 1, // Ensure the image fills the entire container
//         width: '100%', // Set the width to 100% of the container
//         height: '100%', // Set the height to 100% of the container
//       },


// })

// import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
// import React from 'react';

// const Vue0 = ({navigation}) => {

//     const handlePress = () => {
//         <button onClick={handlePress}>Vue1</button>
//         navigation.navigate('Vue40')

//     }

//     const handlePress2 = () => {
//         <button onClick={handlePress2}>Vue2</button>
//         navigation.navigate('Vue41')
//     }

//     const handlePress3 = () => {
//         <button onClick={handlePress3}>Vue3</button>
//         navigation.navigate('Vue42')
//     }

//     const handlePress4 = () => {    
//         <button onClick={handlePress4}>Vue4</button>
//         navigation.navigate('Vue43')
//     }

//     const handlePress5 = () => {
//         <button onClick={handlePress5}>Vue5</button>
//         navigation.navigate('Vue44')
//     }

//   return (

//     <ImageBackground 
//       source={require('../assets/images/background.png')}
//       style={styles.imageBackground} // Set styles for the ImageBackground
//       resizeMode="cover" // Adjust this to control how the image scales
// >
//         <View style={styles.container}>
//         <Text style={styles.text}>Bienvenue sur mon application</Text>
//         <Text style={styles.text}>Je m'appelle Thibault</Text>

//       <Pressable
//       style={({pressed}) => ({backgroundColor: 'red', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//       onPress={handlePress}
//       >
//       <Text style={styles.btn}>Vue40</Text>
//       </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'blue', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress2}
//         >
//         <Text style={styles.btn}>Vue41</Text>
//         </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'black', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress3}
//         >
//         <Text style={styles.btn}>Vue42</Text>
//         </Pressable>
//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'green', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress4}
//         >
//         <Text style={styles.btn}>Vue43</Text>
//         </Pressable>

//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'orange', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress5}
//         >
//         <Text style={styles.btn}>Vue44</Text>
//         </Pressable>
//     </View>
//     </ImageBackground >

    
//   )
  
  

// }


// export default Vue0

// const styles = StyleSheet.create({
//     container: {
        
//         flex: 2,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text:{
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'blue',
//     }, 
//     btn:{
//         padding: 10,
//         color: 'white',
//         borderRadius: 10,
//         textDecoration: 'none',
//         display: 'inline-block',
//         fontSize: 30,
//         margin: 10,
//         transitionDuration: 0.4,
//     }, 
//     imageBackground: {
//         flex: 1, // Ensure the image fills the entire container
//         width: '100%', // Set the width to 100% of the container
//         height: '100%', // Set the height to 100% of the container
//       },


// })