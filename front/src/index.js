import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from './App';
import store from "./store/configureStore";
import './index.css';

let app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
