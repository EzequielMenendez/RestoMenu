import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'
import SearchBar from '../../components/SearchBar/SeachBar'

const Main = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRestaurants())
    }, [])

    return (
        <div>
            <SearchBar />
            <Cards />
        </div>
    )
}

export default Main