const Card = (props)=>{
    const {username, image, location} = props
    return (
        <div>
            <img src="https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" width={50}/>
            <h3>{username}</h3>
            <p>{location}</p>
        </div>
    )
}

export default Card