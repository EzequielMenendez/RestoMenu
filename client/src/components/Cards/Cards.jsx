import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Cards = ()=>{
    const restaurants = useSelector(state=> state.restaurants)
    return (
        <div>
            {restaurants?.map((r)=>(
                <div key={r._id}>
                    <Card username={r.username} image={r.image} location={r.location}/>
                </div>
            ))}
        </div>
    )
}

export default Cards