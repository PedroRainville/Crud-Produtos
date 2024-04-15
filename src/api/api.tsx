import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6615d27eb8b8e32ffc7bcaea.mockapi.io/api/produtos'
});

export default api;