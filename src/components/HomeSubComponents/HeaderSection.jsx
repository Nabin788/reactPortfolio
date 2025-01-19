import { NavLink } from "react-router-dom";

export const HeaderSection = () => {
    // Define the active link style object
    const activeStyle = { color: "black" };

    return (
        <header>
            <div className="profile">
                <div className="img-container">
                    <NavLink to="/home">
                        <img
                            className="profile-img"
                            src="/public/nabin.webp"
                            alt="Nabin Poudel"
                            loading="lazy"
                        />
                    </NavLink>
                </div>
                <h1>Nabin Poudel</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to="/home"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            About me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Contact me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
