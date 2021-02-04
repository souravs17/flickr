// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: "0 4px !important",
    marginBottom: "4px !important",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  clickable: {
    cursor: "pointer",
  },
}));

const GridItem = (props) => {
  const classes = useStyles();
  const {
    children,
    isCenterNeeded = true,
    isClickable = false,
    ...rest
  } = props;
  return (
    <Grid
      item
      {...rest}
      className={`${classes.grid} ${isCenterNeeded ? classes.root : ""} ${
        isClickable ? classes.clickable : ""
      }`}
    >
      {children}
    </Grid>
  );
};

export default GridItem;
