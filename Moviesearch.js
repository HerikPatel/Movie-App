import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default class Moviesearch extends React.Component {
  state = {
    Title: [],
    Plot: [],
    Poster: [],
    Runtime: [],
    Director: [],
    imdbRating: [],
    validurl: true,
  };
  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?apikey=30db3f7e&plot=full&i=" + this.props.imdbID
    )
      .then((response) => response.json())
      .then(({ Title, Plot, Poster, Runtime, Director, imdbRating }) =>
        this.setState({
          Title: Title,
          Plot: Plot,
          Poster: Poster,
          Runtime: Runtime,
          Director: Director,
          imdbRating: imdbRating,
        })
      );
  }
  checkplot() {
    if (this.state.Plot.length < 4) {
      return "Sorry no plot to show";
    } else {
      return this.state.Plot;
    }
  }
  checkimage() {
    if (this.state.Plot.length < 4) {
      this.setState({ validurl: false });
      return;
    }
  }

  render() {
    return (
      <View style={styles.Container}>
        <Image
          style={styles.Poster}
          source={{
            uri: "" + this.state.Poster,
          }}
        />
        <View style={styles.imdbcontainer}>
          <Text style={styles.Rating}>Imdb: </Text>
          <Text style={styles.Rating}> {this.state.imdbRating} </Text>
        </View>
        <View>
          <Text style={styles.Plot}>{this.checkplot()}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  imdbcontainer: {
    flexDirection: "row",
  },
  Plot: {
    color: "white",
    fontStyle: "italic",
  },
  Poster: {
    resizeMode: "contain",
    padding: 20,
    height: 520,
    width: 410,
  },
  Rating: {
    fontWeight: "bold",
    fontStyle: "normal",
    color: "yellow",
  },
});
