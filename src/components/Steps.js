import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import "./Steps.css";

const Steps = ({ className = "" }) => {
  return (
    <div className={`steps1 ${className}`}>
      <div className="horizontalborder17">
        <div className="horizontalborder-inner">
          <div className="frame-parent1">
            <div className="group">
              <div className="div21">01</div>
              <div className="background-wrapper">
                <div className="background3" />
              </div>
              <div className="circle-pad-finger1241182csvg-container">
                <img
                  className="circle-pad-finger1241182csvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/circlepadfinger1241182csvg1.svg"
                />
              </div>
            </div>
            <div className="heading-3-select-a-data-plan-group">
              <div className="heading-310">Select a Data Plan</div>
              <div className="go-to-our-container">
                <span>
                  <p className="go-to-our">
                    Go to our Data Plans page and choose a plan that
                  </p>
                  <p className="suits-your-needs">suits your needs.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          className="img010a93eebdpng-icon"
          loading="lazy"
          alt=""
          src="/img010a93eebdpng@2x.png"
        />
      </div>
      <div className="horizontalborder18">
        <div className="frame-parent2">
          <div className="frame-wrapper">
            <div className="frame-parent3">
              <div className="parent1">
                <div className="div22">02</div>
                <div className="background-container">
                  <div className="background4" />
                </div>
                <div className="icon-payment5c902640svg-fill-wrapper">
                  <img
                    className="icon-payment5c902640svg-fill"
                    loading="lazy"
                    alt=""
                    src="/iconpayment5c902640svg-fill.svg"
                  />
                </div>
              </div>
              <div className="heading-3-pay-with-card-parent">
                <div className="heading-311">Pay with Card</div>
                <div className="we-use-an-container">
                  <p className="we-use-an">
                    We use an online payment service with the highest
                  </p>
                  <p className="level-of-certified">
                    level of certified security. All major credit and debit
                  </p>
                  <p className="cards-can-be">cards can be accepted.</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img02ca1af419png-icon"
            loading="lazy"
            alt=""
            src="/img02ca1af419png@2x.png"
          />
        </div>
      </div>
      <div className="horizontalborder19">
        <div className="install-profile-content">
          <div className="install-profile-title-parent">
            <div className="install-profile-title">03</div>
            <div className="install-profile-icon-backgroun">
              <div className="background5" />
            </div>
            <div className="install-profile-icon">
              <img
                className="qr-code-scan69b5fa76svg-icon1"
                loading="lazy"
                alt=""
                src="/qrcodescan69b5fa76svg.svg"
              />
            </div>
          </div>
          <div className="install-profile-instructions">
            <div className="heading-312">Install eSIM Profile</div>
            <div className="once-your-data-container1">
              <p className="once-your-data1">
                Once your data plan purchase is complete, you will
              </p>
              <p className="receive-a-confirmation">
                receive a confirmation email with a QR code for your
              </p>
              <p className="esim-profile-installation">
                eSIM profile installation. Simply scan the QR code
              </p>
              <p className="and-add-the">
                and add the Cellular Plan to your phone.
              </p>
            </div>
          </div>
          <FrameComponent3 />
        </div>
        <div className="install-profile-image">
          <img
            className="img0352d1cc9cpng-icon"
            loading="lazy"
            alt=""
            src="/img0352d1cc9cpng@2x.png"
          />
        </div>
      </div>
      <div className="horizontalborder20">
        <div className="frame-parent4">
          <div className="parent2">
            <div className="div23">04</div>
            <div className="background-frame">
              <div className="background6" />
            </div>
            <div className="phone-action-checkfc9c5c1dsv-container">
              <img
                className="phone-action-checkfc9c5c1dsv-icon1"
                loading="lazy"
                alt=""
                src="/phoneactioncheckfc9c5c1dsvg.svg"
              />
            </div>
          </div>
          <div className="heading-313">You're Online!</div>
          <div className="at-this-point-your-esim-is-re-wrapper">
            <div className="at-this-point-container">
              <p className="at-this-point">
                At this point, your eSIM is ready to connect. Make
              </p>
              <p className="sure-you-set">
                sure you set PulseNets Mobile eSIM for Cellular Data,
              </p>
              <p className="and-turn-your">and turn your Data Roaming on.</p>
            </div>
          </div>
          <FrameComponent3 />
        </div>
        <div className="img04cbcbc52cpng-wrapper">
          <img
            className="img04cbcbc52cpng-icon"
            loading="lazy"
            alt=""
            src="/img04cbcbc52cpng@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Steps.propTypes = {
  className: PropTypes.string,
};

export default Steps;
