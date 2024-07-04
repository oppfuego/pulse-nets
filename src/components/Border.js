import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Border.css";

const Border = ({
  className = "",
  pictureFrwebp,
  france,
  propWidth,
  propBorderRight,
}) => {
  const borderStyle = useMemo(() => {
    return {
      width: propWidth,
      borderRight: propBorderRight,
    };
  }, [propWidth, propBorderRight]);

  return (
    <div className={`border2 ${className}`} style={borderStyle}>
      <div className="picture-frwebp-parent">
        <img
          className="picture-frwebp"
          loading="lazy"
          alt=""
          src={pictureFrwebp}
        />
        <div className="france">{france}</div>
      </div>
    </div>
  );
};

Border.propTypes = {
  className: PropTypes.string,
  pictureFrwebp: PropTypes.string,
  france: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBorderRight: PropTypes.any,
};

export default Border;
