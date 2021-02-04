import React from "react";
import { GroupSearch, GroupChart, GroupList } from "./components";
import { GridContainer, GridItem } from "../shared/components/grid";

const Groups = () => {
  return (
    <>
      <GridContainer>
        <GridItem xs={12}>
          <GroupSearch />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem sm={9} xs={12}>
          <GroupList />
        </GridItem>
        <GridItem sm={3} xs={12} isCenterNeeded={false}>
          <GroupChart />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Groups;
