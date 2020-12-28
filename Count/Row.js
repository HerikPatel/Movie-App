import React from "react";
import { StyleSheet, Text, View, Image, Alert, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { withNavigation } from "react-navigation";
class Row extends React.Component {
  state = {
    Movies: [],
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.maincontainer}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            this.props.navigation.navigate("MoviesScreen", {
              item: this.props,
            });
          }}
        >
          <View>
            <Image
              style={styles.Poster}
              source={{
                uri: this.props.Poster,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    borderWidth: 70,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "black",
    paddingTop: "8%",
    alignItems: "center",
  },
  text: {
    padding: 7,
    fontSize: 13,
    //fontWeight: "bold",
  },
  Poster: {
    resizeMode: "contain",
    width: 300,
    height: 300,
  },
});
export default function (props) {
  const navigation = useNavigation();

  return <Row {...props} navigation={navigation} />;
}
