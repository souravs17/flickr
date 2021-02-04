import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const GroupCard = (props) => {
  const classes = useStyles();
  const { name, img, subheader, children } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label={name} src={img} />}
        title={name}
        subheader={subheader}
      />

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default GroupCard;
