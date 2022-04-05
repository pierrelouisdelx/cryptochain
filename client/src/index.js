import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/App';
import history from './history';

render(
    <BrowserRouter history={history}>
        <Routes>
            <Route path='/' element={<App/>} />
        </Routes>
    </BrowserRouter>,  
    document.getElementById('root')
);