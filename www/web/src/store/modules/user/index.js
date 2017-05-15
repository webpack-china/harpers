// 简单store 单文件

import { userService } from 'services';

const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

const state = {
    isFetching: false,
    user: {}
};

const getters = {

};

const actions = {
    fetchUserInfo ({ commit, state }, params) {
        userService.getUser().then(function (response) {
            commit(GET_USER_SUCCESS, {
                data: response.data
            });
        });
    }
};

const mutations = {
    [GET_USER_SUCCESS] (state, action) {
        state.isFetching = false;
        state.user = action.data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
