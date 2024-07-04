import PropTypes from "prop-types";
import "./HorizontalBorder.css";

const HorizontalBorder = ({
  className = "",
  pictureAuwebp,
  heading3Europe,
}) => {
  return (
    <div className={`horizontalborder16 ${className}`}>
      <div className="region-plan-container">
        <div className="region-plan-item">
          <img
            className="picture-auwebp"
            loading="lazy"
            alt=""
            src={pictureAuwebp}
          />
          <h3 className="heading-39">{heading3Europe}</h3>
        </div>
        <div className="border4">
          <div className="icon-coveragebc53ed3csvg-container">
            <img
              className="icon-coveragebc53ed3csvg2"
              alt=""
              src="/iconcoveragebc53ed3csvg.svg"
            />
            <div className="coveragenetwork2"> Coverage/Network</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HorizontalBorder.propTypes = {
  className: PropTypes.string,
  pictureAuwebp: PropTypes.string,
  heading3Europe: PropTypes.string,
};

export default HorizontalBorder;
