import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

export const FreeSearch = ({
  id,
  name,
  label,
  variant = "standard",
  size = "small",
  width = 250,
  handleTesxtSearch,
}) => {
  const [currentValue, setCurrentValue] = useState("");
  const keyPress = (e) => {
    if (e.keyCode == 13 && handleTesxtSearch) {
      handleTesxtSearch(currentValue);
    }
  };

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <TextField
      id={id}
      name={name}
      label={label}
      variant={variant}
      size={size}
      style={{ width: width }}
      onKeyDown={keyPress}
      onChange={handleChange}
    />
  );
};

FreeSearch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.number,
  handleTesxtSearch: PropTypes.func,
};
