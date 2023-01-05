import React from "react";
import "./App.scss";
import logo from "./logo.svg";
import MyComponent from "./Example/MyComponent";
// const App = () => {

// }
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyComponent />
        </header>
      </div>
    </>
  );
}

export default App;
