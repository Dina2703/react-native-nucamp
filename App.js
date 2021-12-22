import React from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

export default function App() {
  return (
    //this gives the Main component and all of its child components the ability to connect to the redux store
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
