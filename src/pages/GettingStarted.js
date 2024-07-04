import Header from "../components/Header";
import Steps from "../components/Steps";
import Benefits from "../components/Benefits";
import FooterDesktop from "../components/FooterDesktop";
import "./GettingStarted.css";

const GettingStarted = () => {
  return (
    <div className="getting-started">
      <Header logo1="/logo-12@2x.png" />
      <section className="content2">
        <h1 className="heading-1">Getting Started</h1>
        <div className="compatibility-notice">
          <div className="heading-34">Device Compatibility</div>
          <div className="please-make-sure-container">
            <p className="please-make-sure">
              Please make sure your device is unlocked
            </p>
            <p className="and-listed-on">
              and listed on our eSIM supported devices
            </p>
            <p className="page">page.</p>
          </div>
        </div>
        <Steps />
      </section>
      <Benefits />
      <FooterDesktop
        logo1="/logo-1-13@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png3@2x.png"
      />
    </div>
  );
};

export default GettingStarted;
