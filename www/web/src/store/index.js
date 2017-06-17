import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user';
import Home from './modules/home';
import Question from './modules/question';
import Search from './modules/search';
import Detail from './modules/question_detail';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        User,
        Home,
        Question,
        Search,
        Detail
    }
});
