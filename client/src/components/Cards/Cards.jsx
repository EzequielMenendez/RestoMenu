import { useSelector } from "react-redux"
import Card from "../Card/Card"
import { CardsContainer } from "./StyledCards"

const Cards = ()=>{
    const restaurants = useSelector(state=> state.restaurants)
    return (
        <CardsContainer>
            {restaurants?.map((r)=>(
                <div key={r._id}>
                    <Card username={r.username} image={r.image} location={r.location}/>
                </div>
            ))}
        </CardsContainer>
    )
}

export default Cards