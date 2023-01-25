import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pokemons from './Components/Pokemons';
import Pokemon from './Components/Pokemon';
import Game from './Components/Game';
import Error404 from './Components/Error404';
import Test from './Components/Test';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test2 from './Components/Test2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokemons/>}/>
        <Route path='/pokemon' element={<Pokemon/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/test2' element={<Test2/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
