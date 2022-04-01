import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import history from './history';
import Blocks from './components/Blocks';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool';
import './index.css';

render(
    <BrowserRouter history={history}>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/blocks' element={<Blocks/>} />    
            <Route path='/send' element={<ConductTransaction/>} />    
            <Route path='/pool' element={<TransactionPool/>} />    
        </Routes>
    </BrowserRouter>,  
    document.getElementById('root')
);