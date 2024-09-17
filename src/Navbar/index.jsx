import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Navbar</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink to="/comments">Comments</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
