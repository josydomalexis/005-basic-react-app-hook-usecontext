import React,{createContext, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Appdetails} from "./Appdetails"
import reportWebVitals from './reportWebVitals';

export const CastleContext = createContext(null)
export const ThemeContext = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CastleContext.Provider value={Appdetails}>
      <ThemeContext.Provider value={{theme:"dark"}}>
        <App />
      </ThemeContext.Provider>
    </CastleContext.Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
