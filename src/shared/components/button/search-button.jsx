import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: "40%",
    // minHeight: "20vh",
    display: "flex",
    alignItems: "center",
  },
}));

const SearchButton = (props) => {
  const classes = useStyles();
  const { id, value, ...rest } = props;
  return (
    <Button
      {...rest}
      id={id}
      variant="contained"
      color="primary"
      className={classes.root}
      startIcon={<SearchIcon />}
    >
      {value}
    </Button>
  );
};

export default SearchButton;
