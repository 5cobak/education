import axios from 'axios';
import { LOCAL_STORAGE_ARTICLES_VIEW } from './consts';

// Set default headers
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const $Axios = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) || '',
    },
});
