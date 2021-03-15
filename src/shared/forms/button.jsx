import React from 'react';
import PropTypes from 'prop-types';


const Button = (props) => {
    return (
        <button
            className={props.btnClassname ? props.btnClassname : "btn btn-primary mx-1 my-1"}
            type={props.btnType ? props.btnType : 'button'}
            onClick={props.action}
            disabled={props.loading || props.disabled}
        >
            <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
                hidden={!props.loading}
            />
            {props.title}
        </button>
    );
};

Button.propTypes = {
    btnClassname: PropTypes.string,
    btnType: PropTypes.string,
    loading: PropTypes.bool,
    title: PropTypes.string.isRequired,
    action: PropTypes.func,
    btnDisabled: PropTypes.bool,
};

export default Button;
