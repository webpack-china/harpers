
import { detailService } from 'services';

function answerReducer(arr) {
    return arr.map(item => {
        let {
            against_count,
            agree_count,
            comment_count,
            content,
            create_time,
            id,
            // markdown_content,
            question_id,
            // status,
            update_time,
            // user_id,
            user: {
                name,
                avatar_url
            }
        } = item;

        return {
            userName: name,
            avatarUrl: avatar_url,
            content,
            updateTime: update_time,
            againstCount: against_count,
            agreeCount: agree_count,
            commentCount: comment_count,
            createTime: create_time,
            answerId: id,
            questionId: question_id
        };
    });
}

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
        state.answers = answerReducer([...payload.answer]);
    },
    [UPDATE_ANSWERS]() {

    }
};

export default {
    state,
    actions,
    mutations
};
