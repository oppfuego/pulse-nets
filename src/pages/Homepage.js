import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop from "../components/FooterDesktop";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header logo1="/logo-1@2x.png" />
      <section className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="affordable-esim-for-container">
            <p className="affordable-esim-for">AFFORDABLE eSIM FOR YOUR</p>
            <p className="international-travel">INTERNATIONAL TRAVEL</p>
          </h1>
          <div className="pulsenets-mobile-re-invents-ho-wrapper">
            <div className="pulsenets-mobile-re-invents-container">
              <span className="pulsenets-mobile-re-invents-container1">
                <p className="pulsenets-mobile-re-invents">
                  PulseNets Mobile re-invents how you stay connected
                </p>
                <p className="anywhere-all-the">anywhere, all the time</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <img className="homepage-child" alt="" src="/vector-1@2x.png" />
      <div className="smart-seamless-content-wrapper">
        <div className="smart-seamless-content">
          <h1 className="smart-seamless-container">
            <p className="smart-seamless">{`Smart & Seamless.`}</p>
            <p className="connecting-today-with">
              Connecting Today With The Future.
            </p>
          </h1>
          <div className="with-pulsenets-mobile-container">
            <p className="with-pulsenets-mobile">
              With PulseNets Mobile, you can enjoy low-cost mobile internet when
              traveling
            </p>
            <p className="internationally-no-longer">
              internationally. No longer a need to swap SIM cards or to risk
              losing one. eSIM technology keeps you
            </p>
            <p className="connected-like-a">connected like a charm.</p>
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <img className="mask-group-icon" alt="" src="/mask-group.svg" />
      <FooterDesktop
        logo1="/logo-1-1@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png@2x.png"
      />
    </div>
  );
};

export default Homepage;
