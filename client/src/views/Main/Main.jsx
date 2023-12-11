import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants, getRestaurantsByName } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'
import SearchBar from '../../components/SearchBar/SeachBar'
import { MainContainer } from './StyledMain'

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
        <MainContainer>
            <SearchBar />
            <Cards />
        </MainContainer>
    )
}

export default Main