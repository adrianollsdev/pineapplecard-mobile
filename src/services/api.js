import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pineapplecard-api.herokuapp.com/api'
})

export default api;