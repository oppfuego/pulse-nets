import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Header from "../components/Header";
import HorizontalBorder2 from "../components/HorizontalBorder2";
import HorizontalBorder1 from "../components/HorizontalBorder1";
import HorizontalBorder from "../components/HorizontalBorder";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListings.css";

const ProductListings = () => {
  return (
    <div className="product-listings">
      <Header logo1="/logo-11@2x.png" />
      <div className="content">
        <div className="aside-heading-1-plans-wrapper">
          <h1 className="aside-heading">Plans</h1>
        </div>
        <div className="enjoy-affordable-mobile-container">
          <p className="enjoy-affordable-mobile">
            Enjoy affordable mobile data in countries across Europe, Asia,
          </p>
          <p className="north-america-and">
            North America, and Oceania. With our prepaid system, there’s no
          </p>
          <p className="need-to-worry">
            need to worry about surprise high charges.
          </p>
        </div>
      </div>
      <main className="plans">
        <section className="region-plans">
          <div className="region-list">
            <div className="region-items">
              <div className="region-links">
                <div className="heading-3">Regional Plans</div>
                <div className="list">
                  <div className="item">
                    <div className="div">-</div>
                    <div className="link-europe">Europe</div>
                  </div>
                  <div className="item1">
                    <div className="div1">-</div>
                    <div className="link-north">North America</div>
                  </div>
                  <div className="item2">
                    <div className="div2">-</div>
                    <div className="link-oceania">Oceania</div>
                  </div>
                </div>
              </div>
              <div className="country-plans">
                <div className="heading-31">Country Plans</div>
                <div className="list1">
                  <div className="item3">
                    <div className="div3">-</div>
                    <div className="link-australia">Australia</div>
                  </div>
                  <div className="item4">
                    <div className="div4">-</div>
                    <div className="link-cambodia">Cambodia</div>
                  </div>
                  <div className="item5">
                    <div className="div5">-</div>
                    <div className="link-china">China</div>
                  </div>
                  <div className="item6">
                    <div className="div6">-</div>
                    <div className="link-hong">Hong Kong</div>
                  </div>
                  <div className="item7">
                    <div className="div7">-</div>
                    <div className="link-japan">Japan</div>
                  </div>
                  <div className="item8">
                    <div className="div8">-</div>
                    <div className="link-laos">Laos</div>
                  </div>
                  <div className="item9">
                    <div className="div9">-</div>
                    <div className="link-macau">Macau</div>
                  </div>
                  <div className="item10">
                    <div className="div10">-</div>
                    <div className="link-singapore">Singapore</div>
                  </div>
                  <div className="item11">
                    <div className="div11">-</div>
                    <div className="link-south">South Korea</div>
                  </div>
                  <div className="item12">
                    <div className="div12">-</div>
                    <div className="link-sri">Sri Lanka</div>
                  </div>
                  <div className="item13">
                    <div className="div13">-</div>
                    <div className="link-taiwan">Taiwan</div>
                  </div>
                  <div className="item14">
                    <div className="div14">-</div>
                    <div className="link-thailand">Thailand</div>
                  </div>
                  <div className="item15">
                    <div className="div15">-</div>
                    <div className="link-united">United States</div>
                  </div>
                  <div className="item16">
                    <div className="div16">-</div>
                    <div className="link-vietnam">Vietnam</div>
                  </div>
                </div>
              </div>
              <div className="faq">
                <div className="heading-32">FAQ</div>
                <div className="list-item">
                  <div className="div17">-</div>
                  <div className="link-faq">FAQ</div>
                </div>
              </div>
            </div>
          </div>
          <div className="regional-plans">
            <div className="europe-plans">
              <h3 className="heading-2">Regional Plans</h3>
              <div className="europe-cards">
                <div className="overlaybordershadow">
                  <HorizontalBorder2
                    cardImage="/vector.svg"
                    heading3Europe="Europe"
                    small36CountriesCovered="36 countries covered"
                  />
                  <div className="europe-durations">
                    <div className="horizontalborder">
                      <div className="duration-details">
                        <div className="date">Date</div>
                        <div className="duration">Duration</div>
                        <div className="price">Price</div>
                        <FormControl
                          className="link"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$5.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$15.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$25.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$50.99"
                    />
                  </div>
                  <div className="usd">* $ = USD</div>
                </div>
                <div className="overlaybordershadow1">
                  <div className="horizontalborder1">
                    <div className="frame-parent">
                      <div className="frame-group">
                        <div className="card-icon-wrapper">
                          <img
                            className="card-icon"
                            alt=""
                            src="/vector-1.svg"
                          />
                        </div>
                        <div className="heading-3-europe-parent">
                          <h3 className="heading-33">North America</h3>
                          <div className="small-36">4 countries covered</div>
                        </div>
                      </div>
                      <div className="border">
                        <div className="icon-coveragebc53ed3csvg-parent">
                          <img
                            className="icon-coveragebc53ed3csvg"
                            alt=""
                            src="/iconcoveragebc53ed3csvg.svg"
                          />
                          <div className="coveragenetwork">
                            {" "}
                            Coverage/Network
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="horizontalborder-parent">
                    <div className="horizontalborder2">
                      <div className="date-parent">
                        <div className="date1">Date</div>
                        <div className="duration1">Duration</div>
                        <div className="price1">Price</div>
                        <FormControl
                          className="link1"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$12.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$36.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$120.99"
                    />
                  </div>
                  <div className="usd1">* $ = USD</div>
                </div>
                <div className="overlaybordershadow2">
                  <HorizontalBorder2
                    cardImage="/group.svg"
                    heading3Europe="Oceania"
                    small36CountriesCovered="2 countries covered"
                  />
                  <div className="horizontalborder-group">
                    <div className="horizontalborder3">
                      <div className="date-group">
                        <div className="date2">Date</div>
                        <div className="duration2">Duration</div>
                        <div className="price2">Price</div>
                        <FormControl
                          className="link2"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$12.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$36.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$120.99"
                    />
                  </div>
                  <div className="usd2">* $ = USD</div>
                </div>
              </div>
            </div>
            <div className="oceania-plans">
              <h3 className="heading-21">Country Plans</h3>
              <div className="oceania-cards">
                <div className="overlaybordershadow3">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp@2x.png"
                    heading3Europe="Australia"
                  />
                  <div className="plan-property">
                    <div className="horizontalborder4">
                      <div className="plan-date">
                        <div className="date3">Date</div>
                        <div className="duration3">Duration</div>
                        <div className="price3">Price</div>
                        <FormControl
                          className="link3"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$6.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$18.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$30.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                  </div>
                  <div className="usd3">* $ = USD</div>
                </div>
                <div className="overlaybordershadow4">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp-1@2x.png"
                    heading3Europe="Cambodia"
                  />
                  <div className="horizontalborder-container">
                    <div className="horizontalborder5">
                      <div className="date-container">
                        <div className="date4">Date</div>
                        <div className="duration4">Duration</div>
                        <div className="price4">Price</div>
                        <FormControl
                          className="link4"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$6.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$18.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$30.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                  </div>
                  <div className="usd4">* $ = USD</div>
                </div>
                <div className="overlaybordershadow5">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp-2@2x.png"
                    heading3Europe="China"
                  />
                  <div className="frame-div">
                    <div className="horizontalborder6">
                      <div className="date-parent1">
                        <div className="date5">Date</div>
                        <div className="duration5">Duration</div>
                        <div className="price5">Price</div>
                        <FormControl
                          className="link5"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$5.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$45.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$75.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$150.99"
                    />
                  </div>
                  <div className="usd5">* $ = USD</div>
                </div>
                <div className="overlaybordershadow6">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp-3@2x.png"
                    heading3Europe="Hongkong"
                  />
                  <div className="horizontalborder-parent1">
                    <div className="horizontalborder7">
                      <div className="date-parent2">
                        <div className="date6">Date</div>
                        <div className="duration6">Duration</div>
                        <div className="price6">Price</div>
                        <FormControl
                          className="link6"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$6.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$18.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$30.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                  </div>
                  <div className="usd6">* $ = USD</div>
                </div>
                <div className="overlaybordershadow7">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp-4@2x.png"
                    heading3Europe="Japna"
                  />
                  <div className="horizontalborder-parent2">
                    <div className="horizontalborder8">
                      <div className="date-parent3">
                        <div className="date7">Date</div>
                        <div className="duration7">Duration</div>
                        <div className="price7">Price</div>
                        <FormControl
                          className="link7"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$6.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$18.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$30.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                  </div>
                  <div className="usd7">* $ = USD</div>
                </div>
                <div className="overlaybordershadow8">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp-5@2x.png"
                    heading3Europe="Laos"
                  />
                  <div className="horizontalborder-parent3">
                    <div className="horizontalborder9">
                      <div className="date-parent4">
                        <div className="date8">Date</div>
                        <div className="duration8">Duration</div>
                        <div className="price8">Price</div>
                        <FormControl
                          className="link8"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$6.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$18.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$30.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                  </div>
                  <div className="usd8">* $ = USD</div>
                </div>
                <div className="overlaybordershadow9">
                  <HorizontalBorder
                    pictureAuwebp="/picture--auwebp-6@2x.png"
                    heading3Europe="Macau "
                  />
                  <div className="horizontalborder-parent4">
                    <div className="horizontalborder10">
                      <div className="date-parent5">
                        <div className="date9">Date</div>
                        <div className="duration9">Duration</div>
                        <div className="price9">Price</div>
                        <FormControl
                          className="link9"
                          variant="standard"
                          sx={{
                            borderColor: "#000",
                            borderStyle: "SOLID",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "50px",
                            width: "76px",
                            height: "34px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "34px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              fontSize: 16,
                              fontWeight: "Regular",
                              fontFamily: "Manrope",
                              textAlign: "left",
                              p: "0 !important",
                              justifyContent: "center",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent="null"
                          >
                            <MenuItem>Select</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                    </div>
                    <HorizontalBorder1
                      gB="1GB"
                      days="15 days"
                      dataPrices="$6.99"
                    />
                    <HorizontalBorder1
                      gB="3GB"
                      days="30 days"
                      dataPrices="$18.99"
                    />
                    <HorizontalBorder1
                      gB="5GB"
                      days="30 days"
                      dataPrices="$30.99"
                    />
                    <HorizontalBorder1
                      gB="10GB"
                      days="30 days"
                      dataPrices="$60.99"
                    />
                  </div>
                  <div className="usd9">* $ = USD</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img
        className="mask-group-icon1"
        loading="lazy"
        alt=""
        src="/mask-group.svg"
      />
      <FooterDesktop
        logo1="/logo-1-11@2x.png"
        linkPartnerBannerBlackV1p="/link--partnerbannerblackv1png1@2x.png"
      />
    </div>
  );
};

export default ProductListings;
