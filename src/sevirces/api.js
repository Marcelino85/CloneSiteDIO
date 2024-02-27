import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:8001',
})

// para iniciar a api no terminal digite: yarn api
// iniciar a aplicação: npm start