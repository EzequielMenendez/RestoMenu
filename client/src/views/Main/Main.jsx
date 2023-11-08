import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants, getRestaurantsByName } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'
import SearchBar from '../../components/SearchBar/SeachBar'

const Main = ()=>{
    const dispatch = useDispatch()
    const name = useSelector(state=> state.name)
    useEffect(()=>{
        if(name === ""){
            dispatch(getRestaurants())
        }else{
            dispatch(getRestaurantsByName())
        }
    }, [])

    return (
        <div>
            <SearchBar />
            <Cards />
        </div>
    )
}

export default Main