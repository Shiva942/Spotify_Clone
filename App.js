import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
//import HomeTab from "./app/screens/homeScreen";
import LibraryTab from "./app/screens/libraryScreen";
import BrowseTab from "./app/screens/browseScreen";
import SearchTab from "./app/screens/searchScreen";
import HomeTab from "./app/screens/mainScreen";
import RadioTab from "./app/screens/radioScreen";
import Test from "./app/screens/testScreen";
//import { Icon } from "native-base";
import { fadeIn } from "react-navigation-transitions";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// const FadeTransition = (index, position) => {
//   const scene = ;
//    const outputOpacity=[0,1];
//    const transition = position.interpolate({inputRange: sceneRange, outputRange: outputOpacity});
//    return(){ opacity: transition }
//
//
//
// }
//    const NavigationConfig = ()=>{
//
//    return{
//      screenInterpolator{sceneProps}
//
//      }
//
//    }

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeTab
    },
    Browse: {
      screen: BrowseTab
    },
    Search: {
      screen: SearchTab
    },
    Radio: {
      screen: RadioTab
    },
    Library: {
      screen: LibraryTab
    }
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => fadeIn(3000),
    tabBarOptions: {
      activeTintColor: "white",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "#1A1A1A",
        height: SCREEN_HEIGHT * 0.09
      }
    }
  }
);

const FinalNavigator = createAppContainer(AppNavigator);

export default class App extends Component {
  async componentDidMount() {
    if (Platform.OS === "android" || Platform.OS === "ios") {
      StatusBar.setHidden(false);
      StatusBar.setBackgroundColor("#1A1A1A", false);
      StatusBar.setBarStyle("dark-content", true);
    } else {
      StatusBar.setHidden(true);
    }
  }
  render() {
    console.log("Testing Render Function")
    <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
     </div>
    <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    return <FinalNavigator />;
  }
}
