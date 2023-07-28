import axios from 'axios';
import { API } from '../config';

export const getProfile = async (token) => {
    try {
        const response = await axios.get(`${API}/user/profile`, {
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

export const updateprofile = async (token, user) => {
    try {
        const response = await axios.put(`${API}/user/update-profile-photo`, user, {
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

export const updateresume = async (token, user) => {
    try {
        const response = await axios.put(`${API}/user/update-resume-photo`, user, {
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

export const getPublicProfile = async (id) => {
    try {
        const response = await axios.get(`${API}/user/public-profile/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateprofileResume = async (token, user) => {
    try {
        const response = await axios.put(`${API}/user/update-profile-resume`, user, {
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

export const updateTransactionsUser = async (token, user) => {
    try {
        const response = await axios.put(`${API}/user/update-transactions`, user, {
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
