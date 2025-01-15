import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
        <header className="section-navbar">
            <section className="top_txt">
               
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get Thapa Membership, 30-day return or refund gauantee.</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <NavLink to="#">SIGN UP</NavLink>
                        </div>

                </div>
            </section>
            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="index" >
                        <p>ThapaFlix</p>
                    </NavLink>

                </div>

                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => 
                            isActive ? "nav-link active" : "nav-link"}>
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({isActive}) => 
                            isActive ? "nav-link active" : "nav-link"}>
                            About
                            </NavLink>
                        </li><li className="nav-item">
                            <NavLink to="/movie" className={({isActive}) => 
                            isActive ? "nav-link active" : "nav-link"}>
                            Movies
                            </NavLink>
                        </li><li className="nav-item">
                            <NavLink to="/contact" className={({isActive}) => 
                            isActive ? "nav-link active" : "nav-link"}>
                            Home
                            </NavLink>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}