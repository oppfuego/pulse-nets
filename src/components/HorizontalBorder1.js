import PropTypes from "prop-types";
import "./HorizontalBorder1.css";

const HorizontalBorder1 = ({ className = "", gB, days, dataPrices }) => {
  return (
    <div className={`horizontalborder15 ${className}`}>
      <div className="data-details">
        <div className="gb">{gB}</div>
        <div className="days">{days}</div>
        <div className="data-prices">{dataPrices}</div>
        <button className="link13">
          <div className="select">Select</div>
        </button>
      </div>
    </div>
  );
};

HorizontalBorder1.propTypes = {
  className: PropTypes.string,
  gB: PropTypes.string,
  days: PropTypes.string,
  dataPrices: PropTypes.string,
};

export default HorizontalBorder1;
