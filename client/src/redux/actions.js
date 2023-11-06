import { getRestaurantsRequest } from "../api/backRoutes"

export const GET_RESTAURANTS = 'GET_RESTAURANTS'

export const getRestaurants = ()=>{
    return async(dispatch)=>{
        try {
            const {data} = await getRestaurantsRequest()
            return dispatch({
                type: GET_RESTAURANTS,
                payload: data
            })
        } catch (error) {
            
        }
    }
}