import { NavLink } from "react-router-dom";
import '../Home.css'

const Navbar = () => {
    return (
        <div className="flex justify-between max-w-7xl mx-auto items-center pt-4">
            <h2 className="text-white opacity-60 font-bold text-4xl">shahadad.</h2>
            <div className="text-white opacity-60 text-center">
                <NavLink className="nav-list">Home</NavLink>
                <NavLink className="nav-list">About</NavLink>
                <NavLink className="nav-list">Projects</NavLink>
                <NavLink className="nav-list">Service</NavLink>
                <NavLink className="nav-list">Contact</NavLink>
            </div>
            <button className="bg-white opacity-60 px-8 py-2 rounded-lg font-medium">Hello</button>
        </div>
    );
};

export default Navbar;