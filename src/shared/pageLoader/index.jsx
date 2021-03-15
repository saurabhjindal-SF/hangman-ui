import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const PageLoader = (props) => {
    return (
        <React.Fragment>
            {props.showLoader ? (
                <div className="overlay">
                    <div className="overlay__inner">
                        <div className="overlay__content">
                            <span className="spinner"></span>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </React.Fragment>
    );
};

PageLoader.propTypes = {
    showLoader: PropTypes.bool.isRequired,
};

export default PageLoader;
