import { getRestaurantsRequest, getRestaurantsbyNameRequest, registerRequest } from "../api/backRoutes"

export const GET_RESTAURANTS = 'GET_RESTAURANTS'
export const GET_RESTAURANTSBYNAME = 'GET_RESTAURANTSBYNAME'
export const SING_UP = "SING_UP"

export const getRestaurants = ()=>{
    return async(dispatch)=>{
        try {
            const {data} = await getRestaurantsRequest()
            return dispatch({
                type: GET_RESTAURANTS,
                payload: data
            })
        } catch (error) {
            if(error.response.data.error === 'Restaurants not found'){
                return dispatch({
                    type: GET_RESTAURANTS,
                    payload: []
                })
            }
        }
    }
}

export const getRestaurantsByName = (name) =>{
    return async(dispatch)=>{
        try {
            const {data} = await getRestaurantsbyNameRequest(name)
            return dispatch({
                type: GET_RESTAURANTSBYNAME,
                payload: {
                    data,
                    name
                }
            })
        } catch (error) {
            if(error.response.data.error === 'Restaurants not found'){
                return dispatch({
                    type: GET_RESTAURANTSBYNAME,
                    payload: {
                        data: [],
                        name: ''
                    }
                })
            }
        }
    }
}

export const singUp = (restaurant) => {
    return async function(dispatch){
        try {
            const res = await registerRequest(restaurant)
            return dispatch({
                type: SING_UP,
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}