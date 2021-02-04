import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: "40%",
    // minHeight: "20vh",
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
  },
}));

const BackButton = (props) => {
  const classes = useStyles();
  const { id, value, ...rest } = props;
  return (
    <Button
      {...rest}
      id={id}
      variant="contained"
      color="secondary"
      className={classes.root}
      startIcon={<ArrowBackIcon />}
    >
      {value}
    </Button>
  );
};

export default BackButton;
