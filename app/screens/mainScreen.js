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
  StyleSheet,
  Animated,
  PanResponder,
  Slider
} from "react-native";

import {
  Icon,
  Card,
  Content,
  Container,
  Header,
  Title,
  CardItem,
  Body
} from "native-base";
//import Card from "../lib/card";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  state = {
    isScrollEnabled: false
  };
  componentWillMount() {
    this.scrollOffset = 0;
    this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 90 });
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        if (
          (this.state.isScrollEnabled &&
            this.scrollOffset <= 0 &&
            gestureState.dy > 0) ||
          (!this.state.isScrollEnabled && gestureState.dy < 0)
        ) {
          return true;
        } else {
          return false;
        }
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.animation.extractOffset();
      },
      onPanResponderMove: (evt, gestureState) => {
        this.animation.setValue({ x: 0, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.moveY > SCREEN_HEIGHT - 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start();
        } else if (gestureState.moveY < 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start();
        } else if (gestureState.dy < 0) {
          this.setState({ isScrollEnabled: true });

          Animated.spring(this.animation.y, {
            toValue: -SCREEN_HEIGHT + 120,
            tension: 1
          }).start();
        } else if (gestureState.dy > 0) {
          this.setState({ isScrollEnabled: false });
          Animated.spring(this.animation.y, {
            toValue: SCREEN_HEIGHT - 120,
            tension: 1
          }).start();
        }
      }
    });
  }

  async componentDidMount() {
    this.startHeaderHeight = 80;

    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <Container>
        <Header style={styles.contain}>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
              alignContent: "center",
              alignSelf: "center",
              paddingTop: 5
            }}
          >
            Home
          </Text>
        </Header>
        <ScrollView>
          <Content style={{ backgroundColor: "black", paddingTop: 20 }}>
            <Title style={{ alignItems: "center", paddingTop: 10 }}>
              You Recently Played
            </Title>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 19, paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_162926.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>So far Away</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163014.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>John</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163033.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>Song</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163057.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Ed Sheeran</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Justin Beiber</Text>
              </View>
            </ScrollView>
          </Content>
          <Content
            style={{
              backgroundColor: "black",
              paddingTop: 20
            }}
          >
            <Title style={{ alignItems: "center", paddingTop: 10 }}>
              Keep the Vibe going
            </Title>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{ color: "grey", marginLeft: SCREEN_WIDTH / 4 + 10 }}
              >
                Inspired by your recent activity
              </Text>
            </View>

            <ScrollView
              horizontal={true}
              style={{ marginTop: 19, paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_162926.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>So far Away</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163014.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>John</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163033.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>Song</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163057.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Ed Sheeran</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Justin Beiber</Text>
              </View>
            </ScrollView>
          </Content>
          <Content
            style={{
              backgroundColor: "black",
              paddingTop: 20,
              alignContent: "center"
            }}
          >
            <Title style={{ alignItems: "center", paddingTop: 10 }}>
              Your heavy rotation
            </Title>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{ color: "grey", marginLeft: SCREEN_WIDTH / 4 - 20 }}
              >
                The Music you've had on repeat this month
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 19, paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_162926.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>So far Away</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163014.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>John</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163033.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>Song</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163057.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Ed Sheeran</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Justin Beiber</Text>
              </View>
            </ScrollView>
          </Content>
          <Content style={{ backgroundColor: "black", paddingTop: 20 }}>
            <Title style={{ alignItems: "center", paddingTop: 10 }}>
              Made for you
            </Title>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{ color: "grey", marginLeft: SCREEN_WIDTH / 4 - 25 }}
              >
                Get better recommendation the more you listen
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 19, paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_162926.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>So far Away</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163014.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>John</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163033.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>Song</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163057.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Ed Sheeran</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Justin Beiber</Text>
              </View>
            </ScrollView>
          </Content>
          <Content style={{ backgroundColor: "black", paddingTop: 20 }}>
            <Title style={{ alignItems: "center", paddingTop: 10 }}>
              New release for you
            </Title>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{ color: "grey", marginLeft: SCREEN_WIDTH / 4 - 10 }}
              >
                Brand new music from music you love
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 19, paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_162926.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>So far Away</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163014.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>John</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163033.jpg")}
                  style={styles.cont}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    alignContent: "center"
                  }}
                >
                  So far Away
                </Text>
                <Text style={styles.imgText}>Song</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163057.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Ed Sheeran</Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
                  style={styles.cont}
                />
                <Text style={styles.imgText}>Justin Beiber</Text>
              </View>
            </ScrollView>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    backgroundColor: "#1A1A1A",
    fontSize: 12
  },
  heade: {
    backgroundColor: "black"
  },
  text: {
    fontSize: 13,
    color: "white"
  },
  contentContainer: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    flex: 1,
    backgroundColor: "orange",
    marginRight: 8,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 70
  },
  img: {
    width: SCREEN_WIDTH * 0.51,
    height: SCREEN_WIDTH * 0.51,
    marginLeft: 2,
    marginRight: 8,
    alignItems: "center",
    marginBottom: 20
  },
  cont: {
    width: SCREEN_WIDTH * 0.45,
    height: SCREEN_WIDTH * 0.45
  },
  imgText: {
    color: "white",
    alignContent: "center",
    fontSize: 13
  }
});
