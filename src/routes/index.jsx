import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Public from './public.route';
import Private from './private.route';
import PageLoader  from '../shared/pageLoader';
import HeaderFooterLayout from '../layouts/headerFooterLayout';
import { RoutePath } from '../helpers';

const NotFound = lazy(() => import('../modules/notFound'));
const Login = lazy(() => import('../modules/login'));
const Home = lazy(() => import('../modules/home'));

const Routes = () => {
    return (
        <Suspense fallback={<PageLoader showLoader={true} />}>
            <Switch>
                <Redirect exact from="/" to={RoutePath.home} />
                <Private exact component={Home} layout={HeaderFooterLayout} path={RoutePath.home} />
                <Public component={Login} layout={HeaderFooterLayout} path={RoutePath.login} restricted={true} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
