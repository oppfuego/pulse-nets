import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`item-link-parent ${className}`}>
      <div className="item-link">
        <div className="for-ios-devices">For iOS devices</div>
      </div>
      <button className="item-link1">
        <div className="for-android-devices">For Android devices</div>
      </button>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
