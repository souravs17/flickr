import { Component } from "react";
import { PhotoLibrary, GroupInfo } from "./components";
import { GridContainer, GridItem } from "../shared/components/grid";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { addImageList, clearGalleryInfo } from "./gallery-action";
class Gallery extends Component {
  componentDidMount() {
    this.props.handleAddImageList(this.props.groupId);
  }

  componentWillUnmount() {
    this.props.handleClearGalleryInfo();
  }
  render() {
    const { groupName } = this.props;
    return groupName ? (
      <GridContainer>
        <GridItem xs={12}>
          <GroupInfo groupName={groupName} />
        </GridItem>
        <GridItem xs={12}>
          <PhotoLibrary />
        </GridItem>
      </GridContainer>
    ) : (
      <Redirect to={ROUTES.GROUPS.URL} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groupName: state.gallery.groupName,
    groupId: state.gallery.groupId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddImageList: (id) => dispatch(addImageList(id)),
    handleClearGalleryInfo: () => dispatch(clearGalleryInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
