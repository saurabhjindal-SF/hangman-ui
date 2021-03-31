import client from '../helpers/axios';

export async function loginRequest (params) {
    const response = await client.post(`login`, params);
    return response.data;
};