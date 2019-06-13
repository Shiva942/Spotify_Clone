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
  FlatList,
  TouchableOpacity
} from "react-native";
import {
  Icon,
  Card,
  Content,
  Container,
  Header,
  Title,
  CardItem,
  Body,
  List,
  ListItem
} from "native-base";

import { Col, Row, Grid } from "react-native-easy-grid";

const numColumns = 2;
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);

//   let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
//   while (
//     numberOfElementsLastRow !== numColumns &&
//     numberOfElementsLastRow !== 0
//   ) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }

//   return data;
// };
export default class BrowseTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <TouchableOpacity style={{ color: "blue" }}>
        <Icon name="ios-eye" style={{ color: tintColor }} />
      </TouchableOpacity>
    )
  };
  //const info = [{key:"Pride"},{key:"Summer"},{key:"Pop"},{key:"Hip-Hop"},{key:"Mood"},{key:"Workout"},{key:"Decades"},{key:"Country"},{key:"Focus"},{key:"Latin"},{key:"Chill"},{key:"EDM"}];

  renderItm = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

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
            Browse
          </Text>
        </Header>

        <Content>
          <Content style={{ backgroundColor: "black" }}>
            <Title>All the latest hits</Title>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 30 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_162926.jpg")}
                  style={styles.cont}
                />
                <Text style={{ color: "white", alignContent: "center" }}>
                  So far Away
                </Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163014.jpg")}
                  style={styles.cont}
                />
                <Text style={{ color: "white", alignContent: "center" }}>
                  John
                </Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163033.jpg")}
                  style={styles.cont}
                />
                <Text style={{ color: "white", alignContent: "center" }}>
                  Song
                </Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163057.jpg")}
                  style={styles.cont}
                />
                <Text style={{ color: "white", alignContent: "center" }}>
                  Ed Sheeran
                </Text>
              </View>
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
                  style={styles.cont}
                />
                <Text style={{ color: "white", alignContent: "center" }}>
                  Justin Beiber
                </Text>
              </View>
            </ScrollView>

            <List>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLef style={{ borderColor: "black" }} t>
                <Icon name="ios-musical-notes" style={{ color: "white" }} />
                <Text style={styles.text}>New Release</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-videocam" style={{ color: "white" }} />
                <Text style={styles.text}>Videos</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-pulse" style={{ color: "white" }} />
                <Text style={styles.text}>Discover</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-volume-high" style={{ color: "white" }} />
                <Text style={styles.text}>Concerts</Text>
              </ListItem>
            </List>
            <Title>Geners & Moods</Title>
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: (SCREEN_WIDTH * 3.33333333) / 100
                }}
              >
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: (SCREEN_WIDTH * 3.33333333) / 100
                }}
              >
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: (SCREEN_WIDTH * 3.33333333) / 100
                }}
              >
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: (SCREEN_WIDTH * 3.33333333) / 100
                }}
              >
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  marginTop: (SCREEN_WIDTH * 3.33333333) / 100
                }}
              >
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
                <View
                  style={{
                    height: (SCREEN_WIDTH * 45) / 100,
                    width: (SCREEN_WIDTH * 45) / 100,
                    backgroundColor: "grey",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
                  }}
                >
                  <Text>Hello</Text>
                </View>
              </View>
            </View>
          </Content>
        </Content>
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
    color: "white",
    paddingLeft: 5
  },
  contentContainer: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: "orange",
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 70
  },
  img: {
    width: 180,
    height: 180,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  cont: {
    width: 150,
    height: 150
  },
  lis: {
    flex: 1,
    marginVertical: 20
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColumns
  },
  itemText: {
    color: "white"
  },
  generCard: {
    height: (SCREEN_WIDTH * 45) / 100,
    width: (SCREEN_WIDTH * 45) / 100,
    backgroundColor: "grey",
    alignContent: "center",
    alignItems: "center",
    marginLeft: (SCREEN_WIDTH * 3.33333333) / 100
  }
});
