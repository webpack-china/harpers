/*
* @Author: leo
* @Date:   2017-04-11 23:52:00
* @Last Modified by:   leo
* @Last Modified time: 2017-04-11 23:52:00
* @introduction 首页store
*/

import { qustionService } from 'services';

const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';

const state = {
    isFetching: false,
    quesions: []
};

const getters = {
    sliceQuesions: state => {
        return state.quesions.slice(0, 5);
    }
};

const actions = {
    getSelectedQts ({ commit, state }, params) {
        qustionService.getQuestions().then(function (response) {
            commit(FETCH_LIST_SUCCESS, {
                data: response.data
            });
        });
    }
};

const mutations = {
    [FETCH_LIST_SUCCESS] (state, action) {
        state.isFetching = false;
        state.quesions = action.data.data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
