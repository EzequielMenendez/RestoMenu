import { getRestaurantsRequest } from "../../api/backRoutes"
import { useEffect, useState } from "react"

const Main = ()=>{

    const [ restaurants, setRestaurants ] = useState()

    useEffect(()=>{
        const asyncFunction = async()=>{
            const {data} = await getRestaurantsRequest()
            setRestaurants(data)
            console.log(data)
        }
        asyncFunction()
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