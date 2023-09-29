import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ItemListProvider from './components/ItemListProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
  <ItemListProvider>
    <App />
    </ItemListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);