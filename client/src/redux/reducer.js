import { GET_RESTAURANTS, GET_RESTAURANTSBYNAME, SING_UP } from "./actions"

const initialState = {
    user: null,
    isAuth: false,
    errors: null,
    loading: true,
    restaurants: [],
    name: ''
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }
        case GET_RESTAURANTSBYNAME:
            return {
                ...state,
                restaurants: action.payload.data,
                name: action.payload.name
            }
        case SING_UP:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default rootReducer