import Row from "./Count/Row";
import React from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class Listview extends React.Component {
  state = {
    Movies: [],
    Name: "Batman",
  };
  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?apikey=30db3f7e&plot=full&s=" + this.state.Name
    )
      .then((response) => response.json())
      .then(({ Search }) => this.setState({ Movies: Search }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.Input}
          onChangeText={(val) => this.setState({ Name: val })}
          placeholder=" Enter Movie name here"
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          title="Search Movie"
          onPress={() => {
            this.componentDidMount();
          }}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <FlatList
          renderItem={(obj) => <Row {...obj.item} />}
          data={this.state.Movies}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  Input: {
    borderWidth: 2,
    borderColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonText: {
    textAlign: "center",
    color: "yellow",
    fontSize: 18,
  },
});
