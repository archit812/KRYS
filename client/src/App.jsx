import React from 'react';
import Canvas from "./canvas/index";
import Home from './pages/home';
import Customizer from './pages/customizer';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;