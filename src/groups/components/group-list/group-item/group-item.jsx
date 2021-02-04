import { withRouter } from "react-router-dom";
import { GridContainer, GridItem } from "../../../../shared/components/grid";
import { Card } from "../../../../shared/components/card";
import {
  PhotoIcon,
  PeopleIcon,
  ChatIcon,
} from "../../../../shared/components/icons";
import { Typography } from "../../../../shared/components/typography";
import { Throttle } from "../../../../shared/services/utility";
import { ROUTES } from "../../../../constants/routes";

const GroupItem = (props) => {
  const { item, handleUpdateGroupInfo, history } = props;

  const handleClick = Throttle(() => {
    handleUpdateGroupInfo(item.id, item.name);
    history.push(ROUTES.GALLERY.URL);
  }, 500);

  return (
    <GridItem sm={4} xs={12} onClick={handleClick} isClickable={true}>
      <Card name={item.name} subheader={`Since ${item.date}`} img={item.img}>
        <GridContainer>
          <GridItem xs={4} align="center">
            <PeopleIcon />
            <Typography gutterBottom variant="caption">
              {item.members}
            </Typography>
          </GridItem>
          <GridItem xs={4} align="center">
            <PhotoIcon />
            {item.pictures}
          </GridItem>
          <GridItem xs={4} align="center">
            <ChatIcon />
            {item.comments}
          </GridItem>
        </GridContainer>
      </Card>
    </GridItem>
  );
};

export default withRouter(GroupItem);
