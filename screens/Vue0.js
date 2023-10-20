// import { Pressable, StyleSheet, Text, ImageBackground, View} from 'react-native';
// import React from 'react';

// const Vue0 = ({navigation}) => {

//     const handlePress = () => {
//         <button onClick={handlePress}>Vue1</button>
//         navigation.navigate('Vue1')

//     }

//     const handlePress2 = () => {
//         <button onClick={handlePress2}>Vue2</button>
//         navigation.navigate('Vue2')
//     }

//     const handlePress3 = () => {
//         <button onClick={handlePress3}>Vue3</button>
//         navigation.navigate('Vue3')
//     }

//     const handlePress4 = () => {    
//         <button onClick={handlePress4}>Vue4</button>
//         navigation.navigate('Vue4')
//     }

//     const handlePress5 = () => {
//         <button onClick={handlePress5}>Vue5</button>
//         navigation.navigate('Vue5')
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
//       <Text style={styles.btn}>Vue1</Text>
//       </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'blue', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress2}
//         >
//         <Text style={styles.btn}>Vue2</Text>
//         </Pressable>

//         <Pressable 
//         style={({pressed}) => ({backgroundColor: 'black', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress3}
//         >
//         <Text style={styles.btn}>Vue3</Text>
//         </Pressable>
//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'green', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress4}
//         >
//         <Text style={styles.btn}>Vue4</Text>
//         </Pressable>

//         <Pressable
//         style={({pressed}) => ({backgroundColor: 'orange', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//         onPress={handlePress5}
//         >
//         <Text style={styles.btn}>Vue5</Text>
//         </Pressable>
//     </View>
//     </ImageBackground >

    
//   )
  
  

// }


// export default Vue0

// const styles = StyleSheet.create({
//     container: {
        
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',

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
// import MyButton from './MyButton';

// const Vue0 = ({navigation}) => {

//     const handlePress = () => {
//         <MyButton iconSource={require('../assets/images/ancre.png')} onClick={handlePress}>Vue1</MyButton>
//         navigation.navigate('Vue1')

//     }

//     const handlePress2 = () => {
//         <button onClick={handlePress2}>Vue2</button>
//         navigation.navigate('Vue2')
//     }

//     const handlePress3 = () => {
//         <button onClick={handlePress3}>Vue3</button>
//         navigation.navigate('Vue3')
//     }

//     const handlePress4 = () => {
//         <button onClick={handlePress4}>Vue4</button>
//         navigation.navigate('Vue4')
//     }

//     const handlePress5 = () => {
//         <button onClick={handlePress5}>Vue5</button>
//         navigation.navigate('Vue5')
//     }
//     return (
//         <ImageBackground 
//           source={require('../assets/images/background.png')}
//           style={styles.imageBackground} // Set styles for the ImageBackground
//           resizeMode="cover" // Adjust this to control how the image scales
//     >
//             <View style={styles.container}>
//             <Text style={styles.text}>Bienvenue sur mon application</Text>
//             <Text style={styles.text}>Je m'appelle Thibault</Text>
    
//           <Pressable 
//           style={({pressed}) => ({backgroundColor: 'lightgrey',padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//           onPress={handlePress}
          
//           >
//           <Text style={styles.btn}>Vue1</Text>
//           </Pressable>
    
//             <Pressable 
//             style={styles.back}
//             onPress={handlePress2}
//             >
//             <Text style={styles.btn}>Vue2</Text>
//             </Pressable>
    
//             <Pressable 
//             style={({pressed}) => ({backgroundColor: 'black', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//             onPress={handlePress3}
//             >
//             <Text style={styles.btn}>Vue3</Text>
//             </Pressable>
//             <Pressable
//             style={({pressed}) => ({backgroundColor: 'green', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//             onPress={handlePress4}
//             >
//             <Text style={styles.btn}>Vue4</Text>
//             </Pressable>
    
//             <Pressable
//             style={({pressed}) => ({backgroundColor: 'orange', padding: 10, margin: 30, opacity: pressed ? 0.5 : 1, borderRadius: 10})}
//             onPress={handlePress5}
//             >
//             <Text style={styles.btn}>Vue5</Text>
//             </Pressable>
//         </View>
//         </ImageBackground >
//       )
    
    
//     }
//     export default Vue0
    
//     const styles = StyleSheet.create({
//         container: {
    
//             flex: 2,
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         text:{
//           fontSize: 20,
//           fontWeight: 'bold',
//           color: 'blue',
//         }, 
//         btn:{
//             flex: 1, 
//             width: '100%', 
//             height: '100%',
//             padding: 10,
//             color: 'white',
//             borderRadius: 10,
//             textDecoration: 'none',
//             display: 'inline-block',
//             fontSize: 30,
//             margin: 10,
//             transitionDuration: 0.4,
//         }, 
//         imageBackground: {
//             flex: 1, // Ensure the image fills the entire container
//             width: '100%', // Set the width to 100% of the container
//             height: '100%', // Set the height to 100% of the container
//           },
//         back: {

//         }

    
    
//     })



import { Pressable, StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from 'react';
import MyButton from '../button/MyButton';
import MyButton1 from '../button/MyButton1';
const Vue0 = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Vue1');
  };

  const handlePress2 = () => {
    navigation.navigate('Vue2');
  }

  const handlePress3 = () => {
    navigation.navigate('Vue3');
  }

  const handlePress4 = () => {
    navigation.navigate('Vue4');
  }

  const handlePress5 = () => {
    navigation.navigate('Vue5');
  }

  const handlePress0 = () => {
    navigation.navigate('Vue5');
  };


  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenue sur mon application</Text>
        <Text style={styles.text}>Je m'appelle Thibault</Text>

        <View style={styles.button1}>
        <MyButton1
          label="Vue5"
          iconSource={require('../assets/images/poisson.png')}
          onPress={handlePress0}
          style={[styles.button1]}
        />
        </View>

        <View style={styles.buttonGroup}>
        <MyButton
          label="Vue2"
          iconSource={require('../assets/images/ancre.png')}
          onPress={handlePress2}
          style={styles.buttonSpacing}
        />

        <MyButton
          label="Vue3"
          iconSource={require('../assets/images/restaurant.png')}
          onPress={handlePress3}
          style={styles.buttonSpacing}
        />
        </View>

        <View style={styles.buttonGroup}>
        <MyButton
          label="Vue4"
          iconSource={require('../assets/images/recette.png')}
          onPress={handlePress4}
          style={styles.buttonSpacing}
        />

        <MyButton
          label="Vue1"
          iconSource={require('../assets/images/tourteau.png')} 
          onPress={handlePress}
          style={styles.buttonSpacing}
        />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Vue0;

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
