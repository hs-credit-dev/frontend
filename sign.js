import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SignIn from './signIn';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
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




export default function Sign() {
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
    <View style={styles.container}>
      <Image
      style={styles.logo}
      source={
        require('./assets/hscLogo21.png')}
      />
      <Image style={styles.menu} source={require('./assets/iconfindermenu2309052.png')}/>
      <Image style={styles.menu2} source={require('./assets/iconfindermenu2309052.png')}/>
      <View style={{borderTopWidth: 1, marginTop: 100, borderTopColor: '#27464F', height: 150}}>
    </View>
    </View>
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
  menu: {
    "transform": [{scale: .3}, {rotate: '90deg'}],
    "position": "absolute",
    "top": -20,
    "right": 15,
    "margin": 0,
    

  },
  menu2: {
    "transform": [{scale: .3}, {rotate: '90deg'}],
    "position": "absolute",
    "top": -5,
    "right": 15,
    "margin": 0,
    

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
    // "marginBottom": 100,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 100,
    "height": 100,
    "left": 10,
    "top": 0,

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
