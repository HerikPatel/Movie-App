import React from "react";
import Moviesearch from "./Moviesearch";
export default function MovieInfo(props) {
  const { navigation } = props;
  const { route } = props;
  const { item } = route.params;
  const { imdbID } = item;
  return <Moviesearch imdbID={imdbID} />;
}
