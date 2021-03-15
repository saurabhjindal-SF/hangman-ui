import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLogin, RoutePath } from '../helpers';
const Private = (props) => {
    const { layout: Layout, component: Component, ...rest } = props;

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(matchProps) =>
                isLogin() ? (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                ) : (
                    <Redirect to={RoutePath.login} />
                )
            }
        />
    );
};

Private.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
};

export default Private;
