import axios from 'axios';
import Cookies from 'js-cookie';
import { API } from '../config';

export const preSignup = async (user) => {
    try {
        const response = await axios.post(`${API}/pre-signup`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};


export const signup = async (user) => {
    try {
        const response = await axios.post(`${API}/signup`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        throw error
        
    }
};

export const signin = async (user) => {
    try {
      const response = await axios.post(`${API}/signin`, user, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while making the sign-in request');
    }
  };

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    return axios(`${API}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        Cookies.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        Cookies.remove(key, {
            expires: 1
        });
    }
};
// get cookie
export const getCookie = key => {
    if (process.browser) {
        return Cookies.get(key);
    }
};
// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};
// autheticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};


export const forgotPassword = async (email) => {
    try {
        const response = await axios.put(`${API}/forgot-password`, email, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};

export const resetPassword = async (resetInfo) => {
    try {
        const response = await axios.put(`${API}/reset-password`, resetInfo, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
};


export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('user')) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};


export const loginWithGoogle = async (user) => {
    try {
      const response = await axios.post(`${API}/google-login-updated`, user, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

export const createLoginAdmin = (token, user) => {
    return axios(`${API}/admin-login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const adminUserLogin = (user) => {
    return axios(`${API}/admin-user-login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};