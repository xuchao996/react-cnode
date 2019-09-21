import request from "../request"

const topic = "/api/v1/topics";
const topicDetail = "/api/v1/topic";

function getTopics (params) {
    // default tab: '', limit: 20,
    return request({
        method: 'get',
        url: topic,
        params: {
            tab: '',
            limit: 20,
            ...params
        },
    })
};

function getTopicDetail (id) {
    return request({
        method: 'get',
        url: `${topicDetail}/${id}`
    })
};

function getUserDetail (user) {
    return request({
        method: 'get',
        url: `/api/v1/user/${user}`
    })
}

function getUserCollectionTopic (user) {
    return request({
        method: 'get',
        url: `/api/v1/user/${user}`
    })
}

function collectTopic (params) {
    return request({
        method: 'post',
        url: '',
        params
    })
}

function deCollectTopic (params) {
    return request({
        method: 'post',
        url: '',
        params
    })
}

export {
    getTopics,
    getTopicDetail,
    getUserDetail,
    getUserCollectionTopic,
    deCollectTopic,
    collectTopic
}