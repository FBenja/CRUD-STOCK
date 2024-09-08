import axios from 'axios';

const URL = 'https://66da6b9af47a05d55be4c43b.mockapi.io/api/StockProducts'

export const axiosInstance = axios.create({
    baseURL: URL
})