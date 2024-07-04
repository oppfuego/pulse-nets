import Header from "../components/Header";
import Form from "../components/Form";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListings1.css";

const ProductListings1 = () => {
  return (
    <div className="product-listings1">
      <Header logo1="/logo-1@2x.png" />
      <section className="content1">
        <div className="aside-heading-1-plans-container">
          <h1 className="aside-heading1">Our Products</h1>
        </div>
        <div className="enjoy-affordable-mobile-container1">
          <p className="enjoy-affordable-mobile1">
            Enjoy affordable mobile data in countries across Europe, Asia,
          </p>
          <p className="north-america-and1">
            North America, and Oceania. With our prepaid system, there’s no
          </p>
          <p className="need-to-worry1">
            need to worry about surprise high charges.
          </p>
        </div>
      </section>
      <section className="overlaybordershadow-parent">
        <form className="overlaybordershadow10">
          <div className="horizontalborder11">
            <div className="customer-information">2. Customer Information</div>
          </div>
          <Form />
        </form>
        <div className="overlaybordershadow11">
          <div className="horizontalborder12">
            <div className="order-summary">1. Order Summary</div>
          </div>
          <div className="container">
            <div className="your-data-plan">Your Data Plan:</div>
            <div className="container1">
              <div className="border1">
                <div className="container2">
                  <div className="container3">
                    <div className="container4">
                      <div className="europe">Europe</div>
                    </div>
                    <div className="container5">
                      <div className="gb-15-days">1GB / 15 days</div>
                    </div>
                  </div>
                  <div className="container6">
                    <div className="empty">$5.99</div>
                  </div>
                </div>
              </div>
              <div className="horizontalborder13">
                <div className="container7">
                  <div className="icon-sim2022cb5fsvg-parent">
                    <img
                      className="icon-sim2022cb5fsvg"
                      loading="lazy"
                      alt=""
                      src="/iconsim2022cb5fsvg.svg"
                    />
                    <div className="esim-parent">
                      <div className="esim">eSIM</div>
                      <div className="free-qr-code">free QR code</div>
                    </div>
                  </div>
                  <div className="div18">$0</div>
                </div>
              </div>
              <div className="container8">
                <div className="strong-total">Total $5.99</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlaybordershadow12">
          <div className="agreement">3. Agreement</div>
        </div>
        <div className="overlaybordershadow13">
          <div className="container9">
            <div className="payment-heading">
              <div className="payment">4. Payment</div>
            </div>
            <img className="image-icon" alt="" src="/image@2x.png" />
          </div>
        </div>
      </section>
      <FrameComponent />
      <FooterDesktop
        logo1="/logo-1-12@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png2@2x.png"
      />
    </div>
  );
};

export default ProductListings1;
