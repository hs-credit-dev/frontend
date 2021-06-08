import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './signIn';
import Sign from './sign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

// import Start from './start'
function DetailsScreen() {
  return (
<Sign></Sign>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.logo} onPress={() => navigation.navigate('Details')}>
      <Image
      style={styles.logo}
      source={
        require('./assets/hscLogo21.png')}
      />

      </TouchableHighlight>

      <View style={{borderTopWidth: 1, marginTop: 100, borderTopColor: '#27464F', height: 150}}>
      <ScrollView style={styles.scrollView}>
      <Text
      style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
        </ScrollView>

        </View>
        <ImageBackground style={styles.backdrop} source={require('./assets/circle.png')}>
<Image
      style={styles.book}
      source={require('./assets/book.png')}
      />

</ImageBackground>
<Text style={styles.textBold}>
  How it works?
</Text>
<Image
 source={require('./assets/image2.png')} 
 style={styles.start_image2} />
 <Image
 source={require('./assets/layer2.png')} 
 style={styles.layer2}
/>

    </View>
  );
}

const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {  
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>


    }</NavigationContainer>
  );
}}

const styles = StyleSheet.create({
  layer2: {
    "opacity": 1,
    "bottom": 0,
    "right": 0,
    "left": 0,
    "transform": [{scale: 1}],
     "position": "absolute",
     "marginTop": 0,
    "marginRight": 50,
    "marginBottom": -100,
    "marginLeft": -0,
     "width": 300,
    "height": 300,
  },
  start_image2: {
    "opacity": 1,
    "bottom": 0,
    "right": 0,
    // "transform": [{scale: "2"}],
    "transform": [{rotate: "-4deg"}],
     "position": "absolute",
     "marginTop": 0,
    "marginRight": -30,
    "marginBottom": -90,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0, 
     "width": 300,
    "height": 300,
   },

  container: {
    flex: 1,
    backgroundColor: '#091E24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  scrollView: {
    "height": 10,
    "marginTop": 30,
    "marginRight": 40,
    "marginLeft": 40,

    // "marginBottom": 300,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  backdrop: {
    "position": "relative",
    "opacity": 1,
    alignContent: 'center',
    "transform": [{scale: .8}],
    margin: 20,
    height: 160,
    width: 160
    
  },  
  book: {
    "position": "relative",
    "opacity": 1,
    alignContent: 'center',
    "transform": [{scale: .6}],
    height: 160,
    width: 160
  },
  logo: {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 100,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 250,
    "height": 250,
    "left": 40,
    "top": 10,

  },
  circle: {
    color: '#3D575E'
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40
  },
  textBold: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Quicksand_700Bold'
  },
});
