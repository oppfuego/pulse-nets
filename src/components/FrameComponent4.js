import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`header-parent ${className}`}>
      <Header logo1="/logo-1@2x.png" />
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="cart-title">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
