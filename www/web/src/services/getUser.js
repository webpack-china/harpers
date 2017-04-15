import axios from 'axios';

const getUser = () => {
    return new Promise((resolve, reject) => {
        axios.get('/user', {

        }).then(() => {

        }).catch(() => {

        });
    });
};

export default getUser;
