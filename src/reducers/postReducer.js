import {GET_POSTS_SUCCESS, REFRESH_POSTS_SUCCESS} from '../actions/postActions.js';

const initialState = {
    data: {
        children: [],
    }
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                ...action.payload.response,
                refreshUrl: action.payload.refreshUrl
            };

        case REFRESH_POSTS_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}