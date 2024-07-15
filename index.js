import React from 'react';
import ReactDOM from 'react-dom/client';
import { createElement } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Display></Display>
  </React.StrictMode>
);



// let demo_text = ReactDOM.createElement("h1", "Welcome to React JS")

// ReactDOM.render(demo_text,document.getElementById('root'));

function display(){
 console.log("jhgsdfjgh")
}

function Display(){
  return createElement(
    'h1',{className : 'hey', style : {color:'red'} ,onClick:() =>{ display()} },'Hello'
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


