import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({
  className = "",
  productThumbnail,
  fentyBeauty50OFFGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="wrapper-product-thumbnail">
        <img
          className="product-thumbnail-icon"
          loading="lazy"
          alt=""
          src={productThumbnail}
        />
      </div>
      <div className="item-description">
        <div className="fenty-beauty-50">{fentyBeauty50OFFGiftCard}</div>
        <div className="discount-20-off">{discount20OFF}</div>
      </div>
      <div className="price-label-parent">
        <div className="price-label">
          <div className="price-value">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="adjust-buttons-parent">
          <div className="adjust-buttons">
            <div className="quantity-buttons">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <div className="icon-separator">3</div>
            <input className="quantity-buttons1" type="checkbox" />
          </div>
          <FormControl
            className="item-time"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#aa46f0",
              borderRadius: "8px",
              width: "99.10714285714286%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 18,
                fontWeight: "Regular",
                fontFamily: "Archivo",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/time-input.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className="separator">$120.00</div>
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
  productThumbnail: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default ItemRow;
