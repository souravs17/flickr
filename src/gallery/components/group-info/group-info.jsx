import { withRouter } from "react-router-dom";
import { GridContainer, GridItem } from "../../../shared/components/grid";
import { BackButton } from "../../../shared/components/button";
import { ROUTES } from "../../../constants/routes";
import { Throttle } from "../../../shared/services/utility";
import { Typography } from "../../../shared/components/typography";
const GroupInfo = (props) => {
  const { history, groupName } = props;
  const handleClick = Throttle(() => {
    history.push(ROUTES.GROUPS.URL);
  }, 500);
  return (
    <GridContainer>
      <GridItem sm={2} xs={12} align="center">
        <BackButton id={"back"} value={"BACK"} onClick={handleClick} />
      </GridItem>
      <GridItem sm={10} xs={12} align="center">
        <Typography variant="h4">{groupName}</Typography>
      </GridItem>
    </GridContainer>
  );
};

export default withRouter(GroupInfo);
