/*
* @Author: leo
* @Date:   2017-05-21 23:21:00
* @Last Modified by:   leo
* @Last Modified time: 2017-05-21 23:21:00
* @introduction 问题store
*/

// import { qustionService } from 'services';

const state = {
    isFetching: false,
    quesions: []
};

const getters = {

};

const actions = {
    getQuestions ({ commit, state }, params) {
        // qustionService.getQuestions().then(function (response) {
        //     commit(FETCH_LIST_SUCCESS, {
        //         data: response.data
        //     });
        // });
    }
};

const mutations = {
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
