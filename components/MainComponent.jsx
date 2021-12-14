import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View, Platform } from "react-native";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRouteName: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);
const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 0,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
