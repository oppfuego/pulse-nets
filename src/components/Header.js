import PropTypes from "prop-types";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = ({ className = "", logo1 }) => {
  return (
    <header className={`header ${className}`}>
      <div className="nav-7-desktop">
        <div className="logo-parent">
          <Link to="/">
            <div className="logo">
              <div className="logo-container">
                <img className="logo-1-icon" loading="lazy" alt="" src={logo1}/>
              </div>
              <img
                  className="pulsenets-icon"
                  loading="lazy"
                  alt=""
                  src="/pulsenets.svg"
              />
            </div>
          </Link>
          <nav className="center-wrapper">
            <nav className="center">
              <nav className="menu">
                <Link to="/getting-started">
                  <div className="about">About</div>

                </Link>
                <div className="features">Features</div>
                <div className="pricing">Pricing</div>
                <div className="gallery">Gallery</div>
                <div className="team">Team</div>
              </nav>
            </nav>
          </nav>
          <div className="right-wrapper">
            <div className="right">
              <img className="search-box-icon" alt="" src="/search-box.svg" />
              <div className="language">
                <img className="usa-icon" alt="" src="/usa-icon@2x.png" />
                <img className="arrows-icon" alt="" src="/arrows.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string,
};

export default Header;
