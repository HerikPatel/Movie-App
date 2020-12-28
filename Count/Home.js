import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
          style={styles.imagebackground}
          source={require("../assets/pics.jpg")}
        >
          <TouchableOpacity
            //style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Movies")}
          >
            <Text style={styles.buttonText}>Enter the world of Movies</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagebackground: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    // marginTop: 65,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    // marginTop: 25,
  },
  text: {
    color: "#101010",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    paddingTop: "90%",
  },
});
