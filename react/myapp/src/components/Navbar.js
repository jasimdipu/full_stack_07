import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar-main">
                <h1>MyApp</h1>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;