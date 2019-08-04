import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import {
  Container,
  Header,
  Title,
  List,
  ListItem,
  Content,
  Left,
  Body,
  Right
} from "native-base";

import { Icon } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class LibraryTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={styles.heade}>
        <Header style={styles.contain}>
          <Left>
            <Icon name="person" iconStyle={styles.iconS} />
          </Left>
          <View
            style={{
              alignContent: "center",
              alignSelf: "center",
              paddingTop: 5,
              marginLeft: SCREEN_WIDTH / 4.4 + 10
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                fontWeight: "bold"
              }}
            >
              Library
            </Text>
          </View>
          <Right>
            <Icon name="settings" iconStyle={styles.iconS} />
          </Right>
        </Header>
        <Content scrollEnabled={true}>
          <List>
            <ListItem style={{ borderColor: "black" }}>
              <Icon name="music-note" iconStyle={styles.iconS} />
              <Text style={styles.text}>Playlists</Text>
            </ListItem>
            <ListItem iconLef style={{ borderColor: "black" }} t>
              <Icon name="radio" iconStyle={styles.iconS} />
              <Text style={styles.text}>Stations</Text>
            </ListItem>
            <ListItem iconLeft style={{ borderColor: "black" }}>
              <Icon name="playlist-play" iconStyle={styles.iconS} />
              <Text style={styles.text}>Songs</Text>
            </ListItem>
            <ListItem iconLeft style={{ borderColor: "black" }}>
              <Icon name="photo-library" iconStyle={styles.iconS} />
              <View style={styles.card}>
                <Text style={styles.text}>Albums</Text>
              </View>
            </ListItem>
            <ListItem iconLeft style={{ borderColor: "black" }}>
              <Icon name="people" iconStyle={styles.iconS} />
              <Text style={styles.text}>Artists</Text>
            </ListItem>
            <ListItem iconLeft style={{ borderColor: "black" }}>
              <Icon name="video-library" iconStyle={styles.iconS} />
              <Text style={styles.text}>Videos</Text>
            </ListItem>
            <ListItem style={{ borderColor: "black", alignItems: "center" }}>
              <Title>Recently Played</Title>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
            <ListItem icon style={styles.listitem}>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <Left>
                  <Image
                    source={require("../assests/IMG_20190603_163033.jpg")}
                    style={styles.imgCard}
                  />
                </Left>
                <Body>
                  <Text style={styles.text}>Playlists</Text>
                  <Text style={styles.text}>artist</Text>
                </Body>
                <Right>
                  <Icon name="menu" iconStyle={styles.iconS} />
                </Right>
              </View>
            </ListItem>
          </List>
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
    marginLeft: 9
  },
  iconS: {
    color: "white"
  },
  card: {
    alignItems: "flex-start"
  },
  listitem: {
    borderColor: "black",
    paddingTop: 5,
    height: 70,
    backgroundColor: "black"
  },
  imgCard: { height: 50, width: 50 }
});
