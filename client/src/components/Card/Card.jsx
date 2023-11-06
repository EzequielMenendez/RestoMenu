const Card = (props)=>{
    const {username, image, location} = props
    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default Card