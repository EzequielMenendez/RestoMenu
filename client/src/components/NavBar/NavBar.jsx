import { Link } from 'react-router-dom'

const NavBar = ()=>{
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Sing In</Link>
            <Link to="/register">Sing up</Link>
        </div>
    )
}

export default NavBar