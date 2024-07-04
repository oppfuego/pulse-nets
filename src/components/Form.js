import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Form.css";

const Form = ({ className = "" }) => {
  return (
    <div className={`form ${className}`}>
      <TextField
        className="container10"
        placeholder="Name"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#eaebf1" },
          "& .MuiInputBase-root": {
            height: "52px",
            backgroundColor: "#fff",
            borderRadius: "0px 0px 0px 0px",
          },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <TextField
        className="container11"
        placeholder="Email"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#eaebf1" },
          "& .MuiInputBase-root": {
            height: "52px",
            backgroundColor: "#fff",
            borderRadius: "0px 0px 0px 0px",
          },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <TextField
        className="container12"
        placeholder="Confirm your Email"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#eaebf1" },
          "& .MuiInputBase-root": {
            height: "52px",
            backgroundColor: "#fff",
            borderRadius: "0px 0px 0px 0px",
          },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
      <Button
        className="button1"
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "16",
          borderColor: "#000",
          borderRadius: "50px",
          "&:hover": { borderColor: "#000" },
          width: 87,
          height: 46,
        }}
      >
        Next
      </Button>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
