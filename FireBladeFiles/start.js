import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Start extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="25d181be-37bb-45cd-ac1c-f2de1f5d8b7a" style={styles.start}>
        <ReactImage data-layer="cb86c528-f508-454d-90df-2ba12eba3adc" source={require('./assets/layer2.png')} style={styles.start_layer2} />
        <View data-layer="3acb5228-433e-4087-94a3-ddd2e35a75d8" style={styles.start_imagemask}></View>
        <ReactImage data-layer="d60088c9-d0ce-4451-99a8-79b167f8e5d2" source={require('./assets/image2.png')} style={styles.start_image2} />
        <ReactImage data-layer="bb12ef2d-9930-40cf-a76a-00655fafb7d2" source={require('./assets/group8.png')} style={styles.start_group8} />
        <Text data-layer="3bc85869-35d8-4b81-a7fe-eb0eb647bee9" style={styles.start_loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorIn}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
        <Svg data-layer="9aec357a-d3f3-468a-a375-36d27ad5c95e" style={styles.start_line2} preserveAspectRatio="none" viewBox="0 -0.5 751.9375 1" fill="transparent"><SvgPath d="M 0 0 L 751.9376220703125 0"  /></Svg>
        <View data-layer="5610faa7-edf9-4b98-a721-0d89cc48e6bc" style={styles.start_group34}>
            <Svg data-layer="bc43a4d3-04bd-436e-adce-488893d01c95" style={styles.start_group34_ellipse20} preserveAspectRatio="none" viewBox="-3 -3 250 249" fill="rgba(9, 30, 36, 1)"><SvgPath d="M 122 0 C 189.3787231445312 0 244 54.39740753173828 244 121.5 C 244 188.6026000976562 189.3787231445312 243 122 243 C 54.62126922607422 243 0 188.6026000976562 0 121.5 C 0 54.39740753173828 54.62126922607422 0 122 0 Z"  /></Svg>
        </View>
        <Text data-layer="ecc0f69d-b957-4bfb-8036-fa98ac3dbbcd" style={styles.start_howItWorks}>How it Works?</Text>
        <ReactImage data-layer="e354f5bf-a986-4154-b21c-01612d52784e" source={require('./assets/xe511a99a.png')} style={styles.start_xe511a99a} />
        <ReactImage data-layer="cedffd84-1415-49cf-a810-e061cd7ae614" source={require('./assets/hscLogo21.png')} style={styles.start_hscLogo21} />
    </ScrollView>
    );
  }
}

Start.propTypes = {

}

Start.defaultProps = {

}


const styles = StyleSheet.create({
  "start": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(9, 30, 36, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 752,
    "height": 1624,
    "left": 0,
    "top": 0
  },
  "start_layer2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 460.48,
    "height": 460.48,
    "left": -0.23,
    "top": 1281.51
  },
  "start_roundedRectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(32, 153, 140, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 50,
    "borderTopRightRadius": 50,
    "borderBottomLeftRadius": 50,
    "borderBottomRightRadius": 50,
    "width": 675.84,
    "height": 726.37,
    "left": 36.09,
    "top": 297.5
  },
  "start_perspectivescreenshot1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1137,
    "height": 1623,
    "left": -0.5,
    "top": -0.5
  },
  "start_layer3c97214ec": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 722,
    "height": 724,
    "left": 17,
    "top": 451
  },
  "start_layer3c97214ec_ellipse1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(20,  20,  20)",
    "shadowOpacity": 0.5490196078431373,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 35,
    "width": 759,
    "height": 761,
    "left": -1,
    "top": -1
  },
  "start_layer3c97214ec_layer3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 692,
    "height": 690,
    "left": 13.5,
    "top": 16.5
  },
  "start_imagemask": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 705,
    "height": 1623,
    "left": 22.5,
    "top": -0.5
  },
  "start_image2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 775,
    "height": 622,
    "left": 118,
    "top": 1188
  },
  "start_group8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 753,
    "height": 1624,
    "left": -1,
    "top": 0
  },
  "start_group8_group7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 753,
    "height": 1624,
    "left": 0,
    "top": 0
  },
  "start_group8_group7_path25": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 773.08,
    "height": 1644,
    "left": -10.04,
    "top": -10
  },
  "start_group8_group7_path26": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 753,
    "height": 1624,
    "left": 0,
    "top": 0
  },
  "start_group8_path27": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 753,
    "height": 1624,
    "left": 0,
    "top": 0
  },
  "start_loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorIn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(251, 251, 251, 1)",
    "fontSize": 35,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Quicksand",
    "textAlign": "center",
    "lineHeight": 45,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 477,
    "height": 237,
    "left": 137,
    "top": 699.5
  },
  "start_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 751.94,
    "height": 1,
    "left": 0.06,
    "top": 646
  },
  "start_group34": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 244,
    "height": 243,
    "left": 254,
    "top": 985
  },
  "start_group34_ellipse20": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 244,
    "height": 243,
    "left": 0,
    "top": 0
  },
  "start_howItWorks": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(251, 251, 251, 1)",
    "fontSize": 35,
    "fontFamily": "Quicksand-Bold",
    "textAlign": "left",
    "lineHeight": 54,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 240,
    "height": 63,
    "left": 255.99,
    "top": 1240.89
  },
  "start_xe511a99a": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 124,
    "height": 115.62,
    "left": 314,
    "top": 1046
  },
  "start_xe511a99a_path200": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.06,
    "height": 110.71,
    "left": 65.21,
    "top": 0
  },
  "start_xe511a99a_path201": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.06,
    "height": 110.66,
    "left": 21.74,
    "top": 0.01
  },
  "start_xe511a99a_path202": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52.37,
    "height": 107.7,
    "left": 0,
    "top": 7.42
  },
  "start_xe511a99a_path203": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52.38,
    "height": 107.72,
    "left": 71.63,
    "top": 7.9
  },
  "start_hscLogo21": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 561,
    "height": 449,
    "left": 86,
    "top": 168
  }
});