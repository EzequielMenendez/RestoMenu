import {useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getRestaurants } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'

const Main = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRestaurants())
    }, [])

    return (
        <div>
            <Cards />
        </div>
    )
}

export default Main