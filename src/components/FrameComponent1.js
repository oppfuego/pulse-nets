import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`how-it-works-content-parent ${className}`}>
      <div className="how-it-works-content">
        <h1 className="heading-22">How It Works</h1>
        <div className="label">
          <Button
            className="label-child"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#000",
              borderRadius: "42px",
              "&:hover": { background: "#000" },
              height: 42,
            }}
          >
            First time user
          </Button>
          <div className="returning-user">Returning user</div>
        </div>
      </div>
      <div className="steps">
        <div className="step-one-content-parent">
          <div className="step-one-content">
            <div className="step-one-action">
              <div className="step-one-placeholder">01</div>
              <div className="step-one-background">
                <div className="background" />
              </div>
              <div className="circle-pad-finger1241182csvg-wrapper">
                <img
                  className="circle-pad-finger1241182csvg-icon"
                  loading="lazy"
                  alt=""
                  src="/circlepadfinger1241182csvg.svg"
                />
              </div>
            </div>
            <div className="heading-3-select-a-data-plan-parent">
              <div className="heading-35">Select a Data Plan</div>
              <div className="find-and-buy-container">
                <p className="find-and-buy">
                  Find and buy the best data plan for you
                </p>
                <p className="from-our-website">
                  from our website. All major credit cards are
                </p>
                <p className="accepted">accepted.</p>
              </div>
              <button className="link11">
                <div className="see-our-plans">See our plans</div>
              </button>
            </div>
          </div>
          <div className="step-two-content-parent">
            <div className="step-two-content">
              <div className="step-two-placeholder">02</div>
              <div className="step-two-background">
                <div className="background1" />
              </div>
              <div className="qr-code-scan69b5fa76svg-wrapper">
                <img
                  className="qr-code-scan69b5fa76svg-icon"
                  loading="lazy"
                  alt=""
                  src="/qrcodescan69b5fa76svg.svg"
                />
              </div>
            </div>
            <div className="heading-3-download-esim-prof-parent">
              <div className="heading-36">Download eSIM Profile</div>
              <div className="once-your-data-container">
                <p className="once-your-data">
                  Once your data plan purchase is complete,
                </p>
                <p className="we-will-send">
                  we will send you a QR code instantly. Scan
                </p>
                <p className="it-to-install">
                  it to install PulseNets Mobile eSIM profile to
                </p>
                <p className="your-device">your device.</p>
              </div>
            </div>
          </div>
          <div className="step-three-content-parent">
            <div className="step-three-content">
              <div className="step-three-placeholder">03</div>
              <div className="step-three-background">
                <div className="background2" />
              </div>
              <div className="phone-action-checkfc9c5c1dsv-wrapper">
                <img
                  className="phone-action-checkfc9c5c1dsv-icon"
                  loading="lazy"
                  alt=""
                  src="/phoneactioncheckfc9c5c1dsvg.svg"
                />
              </div>
            </div>
            <div className="heading-37">You're Online!</div>
            <div className="you-are-good-container">
              <p className="you-are-good">
                You are good to go by this point. Turn on
              </p>
              <p className="data-roaming-when">
                data roaming when you arrive in the
              </p>
              <p className="country-that-is">
                country that is in your selected data plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
