import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const mapListToRequiredStructure = (optionsList) => {
  const mappedList = [{ label: "All", value: "" }];
  optionsList?.forEach((category) => {
    mappedList.push({ label: category, value: category });
  });
  return mappedList;
};
export const DropdownFilter = ({
  id,
  label,
  name,
  helperText,
  variant = "standard",
  defaultValue = "",
  optionsList,
  handleSelectedOptionChange,
}) => {
  const mappedOptions = mapListToRequiredStructure(optionsList);
  const onHandleSelectedOptionChange = (e) => {
    const changedValue = e.target.value;
    if (handleSelectedOptionChange) handleSelectedOptionChange(changedValue);
  };

  return (
    <TextField
      id={id}
      name={name}
      select
      label={label}
      helperText={helperText}
      variant={variant}
      defaultValue={defaultValue}
      onChange={onHandleSelectedOptionChange}
    >
      {mappedOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

DropdownFilter.propTypes = {
  optionsList: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  variant: PropTypes.string,
  defaultValue: PropTypes.string,
  handleSelectedOptionChange: PropTypes.func,
};
