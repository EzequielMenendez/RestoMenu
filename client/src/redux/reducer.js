
const initialState = {
    user: null,
    isAuth: false,
    errors: null,
    loading: true,
}

function rootReducer(state=initialState, action){
    switch(action.type){
        default:
            return state
    }
}

export default rootReducer