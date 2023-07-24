import axios from 'axios';
import { API } from '../config';

export const emailContactForm = async (data) => {
    let emailEndpoint;

    if (data.authorEmail) {
        emailEndpoint = `${API}/contact-blog-author`;
    } else {
        emailEndpoint = `${API}/contact`;
    }

    try {
        const response = await axios.post(emailEndpoint, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
      console.log(error.response.data)
      return error.response.data
    }
};