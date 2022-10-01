import React from "react";
import {
  AsyncStorage,
  Dimensions,
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import DialogManager, {
  DialogContent,
  ScaleAnimation
} from "react-native-dialog-component";
import store from "../config/store";
// import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size, factor = 0.25) =>
  size + (verticalScale(size) - size) * factor;

function siteUrl(endpoint = "guest") {
  return "https://api.codiumclub.org/v1/" + endpoint + "/";
}

const ItemsPerPage = 10;

function displayAlert(
  title = "",
  messageText = "",
  buttonText = "ok",
  callbackOnOk = null,
  cancelable = true,
  dismissOnBackPress = true
) {
  const displayAlertStyle = StyleSheet.create({
    container: {
      alignItems: "center"
    },
    heading: {
      textAlign: "center",
      color: "black",
      fontFamily: "Poppins-Regular",
      fontSize: moderateScale(18)
    },
    messageContainer: {
      marginTop: moderateScale(10),
      width: "85%",
      marginBottom: moderateScale(10)
    },
    messageText: {
      textAlign: "center",
      fontFamily: "Poppins-Regular",
      fontSize: moderateScale(14)
    },
    blueButton: {
      width: scale(250),
      padding: moderateScale(12),
      backgroundColor: "#2276d3",
      borderRadius: 50,
      justifyContent: "center",
      marginBottom: moderateScale(10, 0.5),
      alignItems: "center"
    },
    blueButtonText: {
      color: "white",
      fontFamily: "Poppins-Regular",
      fontSize: moderateScale(14)
    },
    messageComponentContainer: {
      marginTop: moderateScale(10),
      marginBottom: 0,
      width: "100%"
    },
    closeContainer: {
      alignSelf: "flex-end",
      marginRight: 5
    },
    close: {
      height: moderateScale(10),
      width: moderateScale(10)
    }
  });

  try {
    const s = store.getState();
    title =
      s.appData.translation[String(s.appData.userData.languageId)][title] ||
      title;
    messageText =
      s.appData.translation[String(s.appData.userData.languageId)][
        messageText
      ] || messageText;
    buttonText =
      s.appData.translation[String(s.appData.userData.languageId)][
        buttonText
      ] || buttonText;
  } catch (error) {}
  console.log("TEST");
  DialogManager.show(
    {
      haveTitleBar: false,
      width: width - scale(50),
      overlayOpacity: 0.4,
      dialogAnimation: new ScaleAnimation(),
      overlayBackgroundColor: "rgb(0, 0, 0)",
      dismissOnTouchOutside: cancelable,
      dismissOnHardwareBackPress: dismissOnBackPress,
      dialogStyle: { borderRadius: 10, width: "90%" },
      children: (
        <DialogContent>
          <View style={displayAlertStyle.container}>
            <Text style={displayAlertStyle.heading}>{title}</Text>
            <View style={displayAlertStyle.messageContainer}>
              <Text style={displayAlertStyle.messageText}>{messageText}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                DialogManager.dismissAll(() => {
                  typeof callbackOnOk === "function" && callbackOnOk();
                });
              }}
              style={displayAlertStyle.blueButton}
            >
              <Text style={displayAlertStyle.blueButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </DialogContent>
      )
    },
    () => {
      // callback for show
    }
  );
}

function getFormBody(data) {
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}

function makeApiRequest(
  url,
  endpoint = "guest",
  data,
  headers = {},
  method = "POST",
  isRaw = false,
  isJson = false
) {
  let body = isRaw ? data : isJson ? JSON.stringify(data) : getFormBody(data);
  headers["Accept"] = "application/json";
  headers["Content-Type"] = isRaw
    ? "multipart/form-data;"
    : isJson
    ? "application/json"
    : "application/x-www-form-urlencoded";
  return fetch(siteUrl(endpoint) + url, {
    method: method,
    headers: headers,
    body: body
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log(error);
      return false;
    });
}

async function getStateAsyncStorage(item) {
  try {
    let savedState = await AsyncStorage.getItem(item);
    if (savedState !== null) {
      let parsedState = await JSON.parse(savedState);
      return parsedState;
    } else {
      return false;
    }
  } catch (error) {
    console.log("Error occurred while retrieving state. Error: " + error);
    return false;
  }
}

async function saveStateAsyncStorage(data) {
  try {
    await AsyncStorage.setItem("appData", JSON.stringify(data));
    return true;
  } catch (error) {
    console.log("Error occurred while saving state. Error: " + error);
    return false;
  }
}

async function requestStoragePermission() {
  try {
    const permissions = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    ]);
    if (
      permissions[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      permissions[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

export {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  width,
  height,
  siteUrl,
  displayAlert,
  saveStateAsyncStorage,
  getStateAsyncStorage,
  makeApiRequest,
  getFormBody /*, isTablet, isEmpty*/,
  ItemsPerPage,
  requestStoragePermission
};
