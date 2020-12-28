import { StatusBar } from "expo-status-bar";
import React from "react";
import MyStack from "./Count/Navigator";
import { Constants } from "expo";

export default class App extends React.Component {
  render() {
    return <MyStack />;
  }
}
