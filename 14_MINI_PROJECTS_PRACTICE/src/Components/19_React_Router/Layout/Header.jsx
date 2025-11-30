 import { NavLink } from "react-router-dom";
//* HERE WE HAVE LEARNED ACTIVE LINKS 
//* 1. className nAVlINK
//* 2 .tHEN IN sTYLE NavLinks
//* 3. then creating a function for it and using it

 const Header = () => {
 
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "green" : "black",
    };
  };
 
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>ADITYA BILLIONAIRE</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="movie"
                  className="nav-link"
                  style={getNavLinkStyle}
                >
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};


export default Header