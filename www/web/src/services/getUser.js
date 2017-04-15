import axios from 'axios';

const getUser = () => {
    return new Promise((resolve, reject) => {
        axios.get('/user', {

        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
};

export default getUser;
