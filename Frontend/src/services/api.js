import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333',
    baseURL: 'https://api.opendota.com/api',
})

export default api;