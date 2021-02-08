import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pineapplecard-api.herokuapp.com'
})

export default api;