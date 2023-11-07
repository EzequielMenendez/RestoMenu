import { useState } from "react"
import { getRestaurantsByName } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const SearchBar = ()=>{

    const dispatch = useDispatch()
    const name = useSelector(state=> state.name)
    const [search, setSearch] = useState(name)

    const onChange = (event)=>{
        setSearch(event.target.value)
        dispatch(getRestaurantsByName(event.target.value))
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={search}/>
        </div>
    )
}

export default SearchBar