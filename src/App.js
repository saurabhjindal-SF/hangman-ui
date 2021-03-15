import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { store } from './store';
import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ToastProvider>
                        <Routes />
                    </ToastProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}
