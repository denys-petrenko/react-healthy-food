import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from "./data/data";
import {HashRouter} from "react-router-dom";
import "./fonts/Roboto-Regular.ttf";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename = "/react-healthy-food">
        <App data={data}/>
    </HashRouter>
);
