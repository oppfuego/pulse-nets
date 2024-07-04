import Header from "../components/Header";
import PageBody from "../components/PageBody";
import FooterDesktop from "../components/FooterDesktop";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-1920">
      <Header logo1="/logo-11@2x.png" />
      <PageBody />
      <FooterDesktop
        logo1="/logo-1-11@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png1@2x.png"
      />
    </div>
  );
};

export default SignUp;
