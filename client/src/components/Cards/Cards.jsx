import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Cards = ()=>{
    const restaurants = useSelector(state=> state.restaurants)
    return (
        <div>
            {restaurants?.map((r)=>(
                <div key={r._id}>
                    {console.log(r)}
                    <Card username={r.username}/>
                </div>
            ))}
        </div>
    )
}

export default Cards