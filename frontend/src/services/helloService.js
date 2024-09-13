// frontend/src/services/helloService.js

import axios from 'axios';

export const getHelloMessage = async () => {
    try {
        const response = await axios.get('/api/hello');
        return response.data;
    } catch (error) {
        console.error('Error fetching hello message:', error);
        throw error;
    }
};
