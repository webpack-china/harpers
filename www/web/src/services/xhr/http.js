/*
* @Author: leo
* @Date:   2017-04-16 12:06:00
* @Last Modified by:   leo
* @Last Modified time: 2017-04-16 12:06:00
*/

import axios from 'axios';
import { commonSuccessHandler, commonErrorHandler } from './commonHandler';

let instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
});

var xhr = ({ method = 'get', url, params = null }) => {
    switch (method) {
        case 'get':
            return instance[method](url, {
                params: params
            }).then(commonSuccessHandler)
            .catch(commonErrorHandler);
        case 'post':
            return instance[method](url, params)
                .then(commonSuccessHandler)
                .catch(commonErrorHandler);
        case 'delete':
        case 'put':
        case 'head':
            return instance[method](url, params)
                .then(commonSuccessHandler)
                .catch(commonErrorHandler);
    }
};

export default xhr;
