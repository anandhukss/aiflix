// import Body from "./components/Body";
import { Provider } from "react-redux";
import { store } from "./store";
import Body from "./components/Body";
import React from "react";

function App() {
  return (
    <>
      <Provider store={store}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
