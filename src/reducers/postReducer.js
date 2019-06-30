import {GET_POSTS_SUCCESS, REFRESH_POSTS_SUCCESS, SET_LOADED} from '../actions/postActions.js';

const initialState = {
    data: {
        children: [],
    },
    isLoaded: false,
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            if (action.payload.response.data.children.length === 0) {
                return {
                    ...state,
                    isLoaded: true
                };
            }

            return {
                ...state,
                ...action.payload.response,
                data: {
                    ...state.data,
                    children: action.payload.response.data.children.slice(0, 25),
                },
                refreshUrl: action.payload.refreshUrl,
                isLoaded: true
            };

        case REFRESH_POSTS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoaded: true
            };

        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            };

        default:
            return state;
    }
}