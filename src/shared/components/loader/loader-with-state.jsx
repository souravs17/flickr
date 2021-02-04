import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  progress: {
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
  },
  wrapperDiv: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "50%",
  },
  root: {
    flexGrow: 1,
    left: "50%",
    position: "fixed",
  },
  divStyle: {
    display: "inline-block",
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    background: "grey",
    opacity: "0.5",
    zIndex: "99999",
  },
}));

const LoaderWithState = (props) => {
  const classes = useStyles();
  const { isLoaderActive } = props;
  return isLoaderActive ? (
    <div className={classes.divStyle}>
      <div className={classes.wrapperDiv}>
        <div className={classes.root}>
          <CircularProgress thickness={8} />
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    isLoaderActive: state.shared.isLoaderActive,
  };
};

export default connect(mapStateToProps)(LoaderWithState);
