import "./navbar.scss"
export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbar blue">
                <a href="#" className="brand-logo">Mern todo APP</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Войти</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}