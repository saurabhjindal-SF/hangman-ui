import client from '../../helpers/axios';

const Login = (params) => async (dispatch) => {
    const response = await client.post(`login`, params);
    return response.data;
};

const actions = { Login };
export default actions;
