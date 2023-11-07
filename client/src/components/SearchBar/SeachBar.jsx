import { useState } from "react"

const SearchBar = ()=>{

    const [search, setSearch] = useState('')

    const onChange = (event)=>{
        setSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={search}/>
        </div>
    )
}

export default SearchBar