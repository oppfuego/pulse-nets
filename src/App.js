import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductListings from "./pages/ProductListings";
import ProductListings1 from "./pages/ProductListings1";
import GettingStarted from "./pages/GettingStarted";
import CartDetails from "./pages/CartDetails";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import CookiePolicy from "./pages/CookiePolicy";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings":
        title = "";
        metaDescription = "";
        break;
      case "/product-listings1":
        title = "";
        metaDescription = "";
        break;
      case "/getting-started":
        title = "";
        metaDescription = "";
        break;
      case "/cart-details-1920":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-listings" element={<ProductListings />} />
      <Route path="/product-listings1" element={<ProductListings1 />} />
      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="/cart-details-1920" element={<CartDetails />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<RefundPolicy />} />
      <Route path="/coockie-policy" element={<CookiePolicy />} />
    </Routes>
  );
}
export default App;
