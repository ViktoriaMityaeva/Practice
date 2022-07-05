import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import reportWebVitals from './reportWebVitals';

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/pages/Page1" element={<Page1 />} />
            <Route path="/pages/Page2" element={<Page2 />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
reportWebVitals();
