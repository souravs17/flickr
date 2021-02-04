import { connect } from "react-redux";
import { GridContainer } from "../../../shared/components/grid";
import { addGroupList } from "../../group-action";
import { updateGroupInfo } from "../../../gallery/gallery-action";
import InfiniteScroll from "../../../shared/components/infinite-scroll";
import { GroupItem } from "./group-item";
const GroupList = (props) => {
  const {
    groupList,
    searchText,
    pageNumber,
    maxPageNumber,
    addNewGroupList,
    handleUpdateGroupInfo,
  } = props;

  const updateGroupList = () => {
    addNewGroupList(searchText, +pageNumber + 1);
  };

  return groupList.length ? (
    <InfiniteScroll
      length={groupList.length}
      next={updateGroupList}
      hasMore={maxPageNumber === pageNumber ? false : true}
    >
      <GridContainer>
        {groupList.map((el) => {
          return (
            <GroupItem
              key={el.id}
              item={el}
              handleUpdateGroupInfo={handleUpdateGroupInfo}
            />
          );
        })}
      </GridContainer>
    </InfiniteScroll>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    groupList: state.groups.groupList,
    searchText: state.groups.searchText,
    pageNumber: state.groups.pageNumber,
    maxPageNumber: state.groups.maxPageNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewGroupList: (text, pageNumber) =>
      dispatch(addGroupList(text, pageNumber)),
    handleUpdateGroupInfo: (id, name) => dispatch(updateGroupInfo(id, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
