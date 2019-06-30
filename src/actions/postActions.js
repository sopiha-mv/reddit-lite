import { RSAA } from 'redux-api-middleware';
import objectToQuery from '../common/objectToQuery.js';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const REFRESH_POSTS_REQUEST = 'REFRESH_POSTS_REQUEST';
export const REFRESH_POSTS_SUCCESS = 'REFRESH_POSTS_SUCCESS';
export const REFRESH_POSTS_FAILURE = 'REFRESH_POSTS_FAILURE';

export const redditUrl = 'https://www.reddit.com';
export const subredditUrl = '/r/vancouver';
const postLimit = 25;

export const getPosts = (query = {}) => {
    query.limit = postLimit - 1;
    let requestUrl = redditUrl + subredditUrl + '.json?' + objectToQuery(query);
    return {
    [RSAA]: {
        types: [
            GET_POSTS_REQUEST,
            {
                type: GET_POSTS_SUCCESS,
                payload: (action, state, res) => res.json().then(json => ({
                    response: json,
                    refreshUrl: requestUrl
                }))
            },
            GET_POSTS_FAILURE
        ],
        endpoint: requestUrl,
        method: 'GET',
    }
}};

export const refreshPosts = (refreshUrl) => ({
    [RSAA]: {
        types: [
            REFRESH_POSTS_REQUEST,
            {
                type: REFRESH_POSTS_SUCCESS,
                payload: (action, state, res) => res.json().then(json => json)
            },
            REFRESH_POSTS_FAILURE
        ],
        endpoint: refreshUrl,
        method: 'GET',
    }
});