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
    addAnswer({id, markdownContent}) {
        return xhr({
            method: 'post',
            url: `/question/${id}/answer`,
            params: {
                markdown_content: markdownContent
            }
        });
    }
}

export default new DetailService();

