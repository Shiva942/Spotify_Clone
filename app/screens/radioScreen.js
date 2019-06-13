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
  ListItem,
  Right
} from "native-base";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class RadioTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-radio" style={{ color: tintColor }} />
    )
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
            Radio
          </Text>
        </Header>
        <ScrollView>
          <Content style={{ backgroundColor: "black" }}>
            <Title>Years in Rewind</Title>
            <ScrollView
              horizontal={true}
              style={{ marginTop: 30 }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.img}>
                <Image
                  source={require("../assests/IMG_20190603_163235.jpg")}
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
          </Content>

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
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
              <ListItem iconLeft style={{ borderColor: "black" }}>
                <Icon name="ios-radio" style={{ color: "white" }} />
                <Text style={styles.text}>Charts</Text>
              </ListItem>
            </List>
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
  }
});
