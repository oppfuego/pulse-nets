import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundShadow.css";

const BackgroundShadow = ({
  className = "",
  heading3CheckYourDataBala,
  checkYourESIMStatusAndHow,
  youveUsedAtAnytime,
  propBoxShadow,
  propBackgroundColor,
}) => {
  const backgroundShadowStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [propBoxShadow, propBackgroundColor]);

  return (
    <div
      className={`backgroundshadow1 ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="benefit-headings">
        <div className="heading-314">{heading3CheckYourDataBala}</div>
        <div className="check-your-esim-container">
          <span>
            <p className="check-your-esim">{checkYourESIMStatusAndHow}</p>
            <p className="youve-used-at">{youveUsedAtAnytime}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  heading3CheckYourDataBala: PropTypes.string,
  checkYourESIMStatusAndHow: PropTypes.string,
  youveUsedAtAnytime: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default BackgroundShadow;
