import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../redux/actions'

const Main = ()=>{
    const dispatch = useDispatch()
    const restaurants = useSelector((state)=>state.restaurants)
    useEffect(()=>{
        dispatch(getRestaurants())
    }, [])

    return (
        <div>
            {restaurants?.map((r)=>(
                <h1>{r.username}</h1>
            ))}
        </div>
    )
}

export default Main