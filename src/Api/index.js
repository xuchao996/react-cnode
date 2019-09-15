import request from "../request"

const topic = "/v1/topics";
const topicDetail = "/v1/topics";
const topicCollect = "/v1/topics";

function getTopics () {
    return request({
        method: 'get',
        url: topic,
        params: {
            tab: 'good',
            limit: 20,
        }
    })
};

export {
    getTopics
}