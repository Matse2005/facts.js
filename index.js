const { get } = require("superagent");

const endpoint = "http://localhost/facts/api/";

async function sendRequest(type, params={}) {
    return get(endpoint + type)
        .query(params)
        .accept('json');
}

exports.getRandom = async function () {
    let resPromise = new Promise((res, rej) => {
        sendRequest("random").then(response => {
            res(response)
        })
    });

    let resJSON = await resPromise;

        return resJSON.body;

};

exports.getCategory = async function (category) {
    let resPromise = new Promise((res, rej) => {
        sendRequest(`category/?c=${category}`).then(response => {
            res(response)
        })
    });

    let resJSON = await resPromise;

        return resJSON.body;

};
