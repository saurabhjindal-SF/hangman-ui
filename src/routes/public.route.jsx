import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLogin, RoutePath } from '../helpers';
const Public = (props) => {
    const { layout: Layout, component: Component, restricted, ...rest } = props;

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(matchProps) =>
                isLogin() && restricted ? (
                    <Redirect to={RoutePath.home} />
                ) : (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )
            }
        />
    );
};

Public.propTypes = {
    restricted: PropTypes.bool.isRequired,
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string.isRequired,
};

export default Public;
