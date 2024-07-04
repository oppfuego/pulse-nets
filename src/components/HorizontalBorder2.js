import PropTypes from "prop-types";
import "./HorizontalBorder2.css";

const HorizontalBorder2 = ({
  className = "",
  cardImage,
  heading3Europe,
  small36CountriesCovered,
}) => {
  return (
    <div className={`horizontalborder14 ${className}`}>
      <div className="europe-rows">
        <div className="europe-data">
          <img
            className="card-image-icon"
            loading="lazy"
            alt=""
            src={cardImage}
          />
          <div className="europe-details">
            <h3 className="heading-38">{heading3Europe}</h3>
            <div className="small-361">{small36CountriesCovered}</div>
          </div>
        </div>
        <div className="border3">
          <div className="icon-coveragebc53ed3csvg-group">
            <img
              className="icon-coveragebc53ed3csvg1"
              loading="lazy"
              alt=""
              src="/iconcoveragebc53ed3csvg.svg"
            />
            <div className="coveragenetwork1"> Coverage/Network</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HorizontalBorder2.propTypes = {
  className: PropTypes.string,
  cardImage: PropTypes.string,
  heading3Europe: PropTypes.string,
  small36CountriesCovered: PropTypes.string,
};

export default HorizontalBorder2;
