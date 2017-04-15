/*
* @Author: leo
* @Date:   2017-04-11 23:52:00
* @Last Modified by:   leo
* @Last Modified time: 2017-04-11 23:52:00
* @introduction 首页store
*/

import service from 'services';

const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';

const state = {
    isFetching: false,
    quesions: []
};

const getters = {

};

const actions = {
    fetchList ({ commit, state }, params) {
        // test
        service.getUser().then(function (response) {
            commit(FETCH_LIST_SUCCESS, {
                data: response.data
            });
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
};

const mutations = {
    [FETCH_LIST_SUCCESS] (state, action) {
        state.isFetching = false;
        state.quesions = action.data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
