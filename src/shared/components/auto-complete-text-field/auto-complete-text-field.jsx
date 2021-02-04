import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutoCompleteTextField = (props) => {
  const { id, options = [], label, onClick, ...rest } = props;
  return (
    <Autocomplete
      freeSolo
      id={id}
      disableClearable
      options={options}
      onChange={onClick}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: "search" }}
          {...rest}
        />
      )}
    />
  );
};

export default AutoCompleteTextField;
