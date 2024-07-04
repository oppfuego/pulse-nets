import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`customer-reviews-content-wrapper ${className}`}>
      <div className="customer-reviews-content">
        <h1 className="heading-23">Customer Reviews</h1>
        <div className="reviews">
          <div className="paragraphbackgroundshadow">
            <div className="small-used-in-parent">
              <div className="small-used">Used in</div>
              <div className="review-content">
                <div className="div19">★★★★★</div>
                <div className="strong-5">5</div>
              </div>
            </div>
            <div className="your-service-was-container">
              <p className="your-service-was">
                Your service was stupid easy to use. We bought a sim while
              </p>
              <p className="sitting-in-a">
                sitting in a cafe at an airport gate and got it loaded on an XS
              </p>
              <p className="within-seconds">within seconds.</p>
            </div>
            <div className="small-by">by Phil, submitted on Sep 26, 2019</div>
          </div>
          <div className="paragraphbackgroundshadow1">
            <div className="small-used-in-group">
              <div className="small-used1">Used in</div>
              <div className="parent">
                <div className="div20">★★★★★</div>
                <div className="strong-51">5</div>
              </div>
            </div>
            <div className="i-had-a">
              I had a great trip in Europe with PulseNets , the internet is very
              good, available everywhere
            </div>
            <div className="small-by1">
              by Shubber , submitted on Sep 30, 2019
            </div>
          </div>
        </div>
        <Button
          className="link12"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "16",
            borderColor: "#000",
            borderRadius: "50px",
            "&:hover": { borderColor: "#000" },
            width: 190,
            height: 46,
          }}
        >
          Read more reviews
        </Button>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
