import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="text-white text-center pt-4">
            <NavLink className="nav-list">Home</NavLink>
            <NavLink className="nav-list">About</NavLink>
            <NavLink className="nav-list">Projects</NavLink>
            <NavLink className="nav-list">Service</NavLink>
            <NavLink className="nav-list">Contact</NavLink>
        </div>
    );
};

export default Navbar;