import logo from '../images/logo.svg'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

let Navbar = () =>{
    return(
        <div className="navbar">
            <div className="logo">
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search for movies,events,plays,sports and activities' />
                </div>
            </div>
            <div className="links">
                <div className="navbar_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favourites">Favourites</Link></li>
                    <li><Link to="/add">Add to Favourites</Link></li>
                </ul>
                </div>
                <div className="navbar_button">
                <button>Sign In</button>
                </div>

            </div>
        </div>
    )
}
export default Navbar;