import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <section className="header">
            <section className="title">
                <h2 className="title_trial">Maider-Trial</h2>
            </section>
            <section className="nav-links_section">
                <section>
                    <NavLink className="nav_link" to="/">
                        Home
                    </NavLink>
                </section>
                <section>
                    <NavLink className="nav_link" to="/nominations">
                        Nominations
                    </NavLink>
                </section>
                <section>
                    <NavLink className="nav_link" to="/nominations/new">
                        New Nominations
                    </NavLink>
                </section>
            </section>
        </section>
    );
};

export default Header;