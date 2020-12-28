import { useLinkProps } from "@react-navigation/native";

const modifyuser = (value) => ({
  Title: value.Title,
  Year: value.Year,
  Type: value.Type,
  imdbID: value.imdbID,
  Poster: value.Poster,
});

export const fetchuser = async (props) => {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=30db3f7e&s=Batman"
  );
  const { Search, totalResults } = await response.json();
  const chk = Search.map(modifyuser);
  //console.log(chk);
  //console.log("fromapi");
  return chk;
};
