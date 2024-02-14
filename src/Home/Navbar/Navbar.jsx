import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-white text-center">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Service</NavLink>
            <NavLink>Contact</NavLink>
        </div>
    );
};

export default Navbar;