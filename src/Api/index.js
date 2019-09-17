import request from "../request"

const topic = "/v1/topics";
const topicDetail = "/v1/topic";
const topicCollect = "/v1/topics";

function getTopics (params = {
    tab: 'good',
    limit: 20
}) {
    return request({
        method: 'get',
        url: topic,
        params,
    })
};

function getTopicDetail (id) {
    return request({
        method: 'get',
        url: `${topicDetail}/${id}`
    })
};

export {
    getTopics,
    getTopicDetail
}