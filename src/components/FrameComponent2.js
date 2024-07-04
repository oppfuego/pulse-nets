import { Button } from "@mui/material";
import Border from "./Border";
import PropTypes from "prop-types";
import "./FrameComponent2.css";
import {Link} from "react-router-dom";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`section-parent ${className}`}>
      <div className="section">
        <form className="backgroundshadow">
          <div className="frame-container">
            <div className="works-in-europe-north-america-parent">
              <h1 className="works-in-europe-container">
                <p className="works-in-europe">
                  Works in Europe, North America, Oceania, and
                </p>
                <p className="asia">Asia.</p>
              </h1>
              <div className="and-more-regions">
                And more regions coming soon.
              </div>
            </div>
            <Link to="/product-listings">
              <Button
                  className="link10"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "16",
                    borderColor: "#000",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#000" },
                    width: 168,
                    height: 46,
                  }}
              >
                View Data Plans
              </Button>
            </Link>

          </div>
          <div className="flags">
            <Border pictureFrwebp="/picture--frwebp@2x.png" france="France" />
            <Border
              pictureFrwebp="/picture--eswebp@2x.png"
              france="Spain"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--uswebp@2x.png"
              france="United States"
              propWidth="unset"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--dewebp@2x.png"
              france="Thiland"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--itwebp@2x.png"
              france="Italy"
              propWidth="220px"
              propBorderRight="unset"
            />
            <Border
              pictureFrwebp="/picture--gbwebp@2x.png"
              france="United Kingdom"
              propWidth="unset"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--dewebp-1@2x.png"
              france="Germany"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--atwebp@2x.png"
              france="Austria"
              propWidth="220px"
              propBorderRight="unset"
            />
            <Border
              pictureFrwebp="/picture--grwebp@2x.png"
              france="Greece"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--cawebp@2x.png"
              france="Canada"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--plwebp@2x.png"
              france="Poland"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--nlwebp@2x.png"
              france="Netherlands"
              propWidth="220px"
              propBorderRight="unset"
            />
            <Border
              pictureFrwebp="/picture--hrwebp@2x.png"
              france="Croatia"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--huwebp@2x.png"
              france="Hungary"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--ptwebp@2x.png"
              france="Portugal"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
            <Border
              pictureFrwebp="/picture--sgwebp@2x.png"
              france="Singapore"
              propWidth="220px"
              propBorderRight="1px solid #eaebf1"
            />
          </div>
          <Link to="/product-listings">
            <Button
                className="button"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#000" },
                  width: 117.1,
                  height: 40.4,
                }}
            >
              Show all
            </Button>
          </Link>

        </form>
      </div>
      <div className="section1">
        <div className="app-content-parent">
          <div className="app-content">
            <h1 className="manage-your-esim-container">
              <span className="manage-your-esim-container1">
                <p className="manage-your-esim">Manage Your eSIM</p>
                <p className="with-our-intuitive">With Our Intuitive App</p>
              </span>
            </h1>
            <div className="the-powerful-yet-container">
              <p className="the-powerful-yet">
                The powerful yet easy-to-use PulseNets Mobile App
              </p>
              <p className="keeps-you-up">
                keeps you up to date on everything about your
              </p>
              <p className="esim-its-packed">
                eSIM. It’s packed with tons of features for you to
              </p>
              <p className="have-full-control">have full control.</p>
            </div>
          </div>
          <img
            className="section-device-isometriceed"
            loading="lazy"
            alt=""
            src="/section--deviceisometriceedc3677png@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
