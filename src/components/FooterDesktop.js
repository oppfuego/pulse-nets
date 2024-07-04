import PropTypes from "prop-types";
import "./FooterDesktop.css";
import {Link} from "react-router-dom";

const FooterDesktop = ({
  className = "",
  logo1,
  linkPartnerBannerBlackV1p,
}) => {
  return (
    <section className={`footer-desktop ${className}`}>
      <div className="bannermask-group">
        <div className="banner">
          <div className="logo-parent1">
            <div className="logo1">
              <div className="logo-image">
                <img className="logo-1-icon1" alt="" src={logo1} />
              </div>
              <img className="pulsenets-icon1" alt="" src="/pulsenets-1.svg" />
            </div>
          </div>
          <div className="nav">
            <div className="setup-links">
              <div className="setup-guides">
                <div className="link-compatibility">Compatibility</div>
              </div>
              <div className="link-set">Set Up Guide for iOS</div>
              <div className="setup-guides1">
                <div className="link-set1">Set Up Guide for Android</div>
              </div>
              <div className="setup-guides2">
                <Link to="/terms">
                  <div className="link-terms">Terms of Use</div>
                </Link>
              </div>
            </div>
            <div className="legal-links">
              <div className="policy-links">
                <Link to="/privacy-policy">
                  <div className="link-privacy">Privacy Policy</div>

                </Link>
                <Link to="/coockie-policy">
                  <div className="link-cookie">Cookie Policy</div>

                </Link>
                <div className="link-contact">Contact Us</div>
                <div className="link-faq1">FAQ</div>
              </div>
            </div>
          </div>
          <div className="partner">
            <img
              className="link-partner-banner-black-v1"
              loading="lazy"
              alt=""
              src={linkPartnerBannerBlackV1p}
            />
          </div>
          <div className="copyright">
            <div className="pulsenets-mobile">© 2024 - PulseNets Mobile</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  logo1: PropTypes.string,
  linkPartnerBannerBlackV1p: PropTypes.string,
};

export default FooterDesktop;
