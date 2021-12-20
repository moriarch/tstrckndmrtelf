import './App.css';
import React, { useState } from 'react';
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import Popup from "./components/popup/Popup";
import AppContext from "./context";


function App() {
  const [context, setContext] = useState({
    popData: null,
    open: false
  });
  return (
    <div className="App">
      <AppContext.Provider value={[context, setContext]}>
        <Header />
        <Container />
        <Popup />
      </AppContext.Provider>
    </div>
  );
}

export default App;
