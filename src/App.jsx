import React from 'react';
import './App.css';
import AppRoutes  from "./routes"
import GlobalStyles from './globalStyles';

function App() {

  console.log("entrou app.jsx")

  return (
    <>
    <AppRoutes />
    <GlobalStyles />
    </>
  );
}

export default App;
