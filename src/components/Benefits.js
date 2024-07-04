import BackgroundShadow from "./BackgroundShadow";
import PropTypes from "prop-types";
import "./Benefits.css";

const Benefits = ({ className = "" }) => {
  return (
    <section className={`benefits ${className}`}>
      <div className="benefits-content">
        <div className="backgroundshadow-parent">
          <BackgroundShadow
            heading3CheckYourDataBala="Check Your Data Balance"
            checkYourESIMStatusAndHow="Check your eSIM status and how much data"
            youveUsedAtAnytime="you’ve used at anytime."
          />
          <BackgroundShadow
            heading3CheckYourDataBala="Data Recharge"
            checkYourESIMStatusAndHow="When you need it, add more data on your eSIM"
            youveUsedAtAnytime="on the go."
            propBoxShadow="unset"
            propBackgroundColor="#edf1f9"
          />
          <BackgroundShadow
            heading3CheckYourDataBala="Manage Multiple eSIM"
            checkYourESIMStatusAndHow="You can register as many eSIM as you want to"
            youveUsedAtAnytime="your account and manage them in one app."
            propBoxShadow="unset"
            propBackgroundColor="#edf1f9"
          />
        </div>
        <img
          className="iphone-balance4086e71fpng-icon"
          loading="lazy"
          alt=""
          src="/iphonebalance4086e71fpng@2x.png"
        />
      </div>
    </section>
  );
};

Benefits.propTypes = {
  className: PropTypes.string,
};

export default Benefits;
