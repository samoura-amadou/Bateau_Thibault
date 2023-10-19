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
            <Text style={styles.styletext1}>Nos bateau partenaires</Text>
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
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  styletext1:{
    color: 'white',
    // fontFamily: 'tattoo-script',
    fontFamily: "italic",
    fontSize: 30,
    paddingBottom: 20,
  },
  imageContainer: {
    marginTop: '0px',
    flex: 1,
    justifyContent: 'flex-end',
    width: '80%',
  },
//   fullWidthButton: {
//     width: '100%',
//   },
    // buttonGroup: {
    //     flexDirection: 'row', // Aligne l'icône et le texte horizontalement
    //     alignItems: 'center', // Centre l'icône et le texte verticalement
    //     padding: 10,
    //     margin: 10,
    //     width: '100%',
    // },
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