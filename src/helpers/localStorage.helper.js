export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const setAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
};

export const clearLocalStorage = () => {
    localStorage.clear();
};
