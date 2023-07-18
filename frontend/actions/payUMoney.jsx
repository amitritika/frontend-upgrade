import axios from 'axios';
import { API } from '../config';

export const getHash = async (data) => {
    try {
        const response = await axios.post(`${API}/payment/payumoney`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const update = async (token, user) => {
    try {
        const response = await axios.put(`${API}/user/update`, user, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateButtons = async (btn, data) => {
    try {
        const response = await axios.put(`${API}/payment/payumoney/buttons/${btn}`, data, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const payButtons = async (btn) => {
    try {
        const response = await axios.get(`${API}/payment/payumoney/buttons/${btn}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
