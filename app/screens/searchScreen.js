import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  SafeAreaView,
  Platform,
  Dimensions,
  StatusBar,
  StyleSheet,
  TextInput,
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
  ListItem,
  Left,
  Right
} from "native-base";

import { SearchBar } from "react-native-elements";
//const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <TouchableOpacity>
        <Icon name="ios-search" style={{ color: tintColor }} />
      </TouchableOpacity>
    )
  };
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <Container>
        <Header style={styles.contain}>
          <SearchBar
            placeholder="Search"
            placeholderTextColor="white"
            inputContainerStyle={styles.searchbar}
            inputStyle={styles.text}
            containerStyle={{ backgroundColor: "black" }}
            onChangeText={this.updateSearch}
            value={search}
          />
        </Header>
        <Content style={{ backgroundColor: "black" }} scrollEnabled={true}>
          <Title style={{ alignItems: "center" }}>Recent Searches</Title>
          <List style={{ paddingTop: 10 }}>
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
                  <Icon name="ios-power" style={{ color: "white" }} />
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
    backgroundColor: "#494846",
    fontSize: 12,
    alignContent: "center",
    alignItems: "center"
  },
  heade: {
    backgroundColor: "black"
  },
  text: {
    fontSize: 13,
    color: "white"
  },
  searchbar: {
    color: "white",
    width: SCREEN_WIDTH * 0.97
  },
  listitem: {
    borderColor: "black",
    paddingTop: 5,
    height: 70,
    backgroundColor: "black"
  },
  imgCard: { height: 50, width: 50 }
});
