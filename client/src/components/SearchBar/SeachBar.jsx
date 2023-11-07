import { useState } from "react"
import { getRestaurantsByName } from "../../redux/actions"
import { useDispatch } from "react-redux"

const SearchBar = ()=>{

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

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