import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-1920">
      <FrameComponent
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent1 />
      <FooterDesktop
        logo1="/logo-1-1@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png@2x.png"
      />
    </div>
  );
};

export default Account;
