import { Link, NavLink } from 'react-router-dom';
import './header.css';
function Header() {
    return (
        <>
            <header>
            <nav className="navbar navbar-expand-xl fixed-top top-navbar">
                    <div className="container-fluid">
                        <Link to='/' className="app-logo">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "><img src='images/menu.png' alt='nav toggler'></img></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav nav-tabs mb-2 mb-lg-0" role="tablist">
                                <li className="nav-item" data-bs-toggle="tab">
                                    <NavLink to="/" className="nav-link fs-6">Home</NavLink>
                                </li>
                                <li className="nav-item" data-bs-toggle="tab">
                                    <NavLink to="/about" className="nav-link fs-6">About</NavLink>
                                </li>
                                <li className="nav-item" data-bs-toggle="tab">
                                    <NavLink to="/contact" className="nav-link  fs-6">Contact Us</NavLink>
                                </li>
                                <li className="nav-item" data-bs-toggle="tab">
                                    <NavLink to="/admin" className="nav-link fs-6">
                                        Admin
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-lg header">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link to='/' className="navbar-brand">News App</Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" data-bs-toggle="tab">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="tab">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="tab">
                                    <Link to="/contactUs" className="nav-link ">Contact Us</Link>
                                </li>
                                <li className="nav-item" data-bs-toggle="tab">
                                    <Link to="/administration" className="nav-link">Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </header>

        </>
    )
};
export default Header;