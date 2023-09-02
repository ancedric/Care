import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import './App.css';
import App from './Home/index';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
//import { createGlobalStyle } from 'styled-components';

/*const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ceviche_One';
  src: url('./Assets/Fonts/CevicheOne-Regular.ttf') format ('truetype');
}
@font-face {
  font-family: 'Kodchasan';
  src: local('Kodchasan') @import url('./Assets/Fonts/Kodchasan-Regular.ttf) format ('truetype'); 
}
@font-face {
  font-family: 'Lilita One';
  src: local ('Lilita One') @import url('./Assets/Fonts/LilitaOne-Regular.ttf') format ('truetype');
body {
    background-color: #1A1A1F;
  }
`*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
