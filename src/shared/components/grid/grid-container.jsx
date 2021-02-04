// @material-ui/core components
import Grid from "@material-ui/core/Grid";

function GridContainer(props) {
  const { children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
}

export default GridContainer;
