import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

export default class App extends Component {
    render() {
        return (
            <QueryClientProvider client={queryClient} contextSharing={true}>
                <BrowserRouter>
                    <ToastProvider>
                        <Routes />
                    </ToastProvider>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        );
    }
}
