
import { detailService } from 'services';

const UPDATE_DETAIL = 'UPDATE_DETAIL';
const UPDATE_ANSWERS = 'UPDATE_ANSWERS';

const state = {
    mdHtmlContent: '',
    mdContent: '',
    question: {
        tag: [],
        title: '',
        content: ''
    },
    answers: [],
};

const actions = {
    getDetail({commit}, {id}) {
        detailService
        .getDetail(id)
        .then(({data}) => {
            commit(UPDATE_DETAIL, data);
        });
    },
    getAnswers() {

    },
    getComments() {

    },
    addAnswer({state}, {id}) {
        detailService
        .addAnswer({id, markdownContent: state.mdContent})
        .then(({data}) => {
        });
    },
    updateMdValue({commit}, {mdContent, mdHtmlContent}) {
        state.mdHtmlContent = mdHtmlContent;
        state.mdContent = mdContent;
    }

};

const mutations = {
    [UPDATE_DETAIL](state, payload) {
        state.question.tag = [...payload.tag];
        state.question.title = payload.title;
        state.question.content = payload.content;
        state.answers = [...payload.answer];
    },
    [UPDATE_ANSWERS]() {

    }
};

export default {
    state,
    actions,
    mutations
};
