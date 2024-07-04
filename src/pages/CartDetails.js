import FrameComponent4 from "../components/FrameComponent4";
import CartItem from "../components/CartItem";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetails.css";

const CartDetails = () => {
  return (
    <div className="cart-details-1920">
      <FrameComponent4 />
      <CartItem />
      <FooterDesktop
        logo1="/logo-1-14@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png4@2x.png"
      />
    </div>
  );
};

export default CartDetails;
