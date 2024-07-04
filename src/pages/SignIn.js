import Header from "../components/Header";
import SignInContent from "../components/SignInContent";
import FooterDesktop from "../components/FooterDesktop";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-1920">
      <Header logo1="/logo-1@2x.png" />
      <SignInContent />
      <FooterDesktop
        logo1="/logo-1-1@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png@2x.png"
      />
    </div>
  );
};

export default SignIn;
