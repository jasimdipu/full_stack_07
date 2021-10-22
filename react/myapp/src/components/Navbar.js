const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>MyApp</h1>
            <div className='links'>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/Blog">Blog</a>
                <a href="/contact">Contact us</a>
            </div>
        </nav>
    );
}

export default Navbar;