'use strict';

import xhr from './xhr';

class DetailService {
    /**
     * [getDetail description]
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    getDetail(id) {
        console.log(id);
        return xhr({
            method: 'get',
            url: `/question/${id}`
        });
    }
    /**
     * [addAnswer description]
     * @param {[type]} options.id              [description]
     * @param {[type]} options.markdownContent [description]
     */
    addAnswer({id, markdownContent}) {
        return xhr({
            method: 'post',
            url: `/question/${id}/answer`,
            params: {
                markdown_content: markdownContent
            }
        });
    }
    agreeAnswer(questionId, answerId) {
        return xhr({
            method: 'post',
            url: `/question/${questionId}/answer/${answerId}/against_count`,
            params: {
            }
        });
    }
    againstAnswer(questionId, answerId) {
        return xhr({
            method: 'post',
            url: `/question/${questionId}/answer/${answerId}/agree_count`,
            params: {
            }
        });
    }
}

export default new DetailService();

