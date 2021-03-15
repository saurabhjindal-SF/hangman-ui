/*
 * Layout: Index
 */
import React from 'react';
import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';

const HeaderFooterLayout = (props) => {
    const { children } = props;
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};
HeaderFooterLayout.propTypes = {
    children: PropTypes.object.isRequired,
};
export default HeaderFooterLayout;
