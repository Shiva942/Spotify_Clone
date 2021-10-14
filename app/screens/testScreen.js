import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
  StatusBar,
  StyleSheet
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class testScreen extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}> textInComponent </Text>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Text style={{ color: "black" }}>Hello</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    border:1px solid,
    height: SCREEN_HEIGHT * 0.8
  },
  text: {
    color: "black"
  }
});
