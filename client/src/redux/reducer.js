import { GET_RESTAURANTS } from "./actions"

const initialState = {
    user: null,
    isAuth: false,
    errors: null,
    loading: true,
    restaurants: []
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }
        default:
            return state
    }
}

export default rootReducer