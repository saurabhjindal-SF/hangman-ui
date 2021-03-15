import { getAccessToken } from '.';

export const validEmailRegex = /^[a-zA-Z0-9](?!.*?[^\na-zA-Z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z0-9]$/;

// check if user logged in
export const isLogin = () => {
    if (getAccessToken()) {
        return true;
    }
    return false;
};

// set message for fields
export const setMessage = (message, name) => {
    if (message && name) {
        return message.replace('{name}', name);
    }
    return '';
};

// yup validation msgs
export const ValidationMessages = {
    required: '{name} is required',
    invalid: '{name} is invalid',
};
