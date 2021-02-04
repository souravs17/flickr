import MasonryGallery from "../../../shared/components/masonry-gallery";
import InfiniteScroll from "../../../shared/components/infinite-scroll";
import { connect } from "react-redux";
import { addImageList } from "../../gallery-action";

const PhotoLibrary = (props) => {
  const {
    images,
    groupId,
    maxPageSize,
    pageNumber,
    handleUpdateImageList,
  } = props;
  const updateList = () => {
    handleUpdateImageList(groupId, pageNumber + 1);
  };
  return (
    <InfiniteScroll
      length={images.length}
      next={updateList}
      hasMore={maxPageSize === pageNumber ? false : true}
    >
      <MasonryGallery images={images} />
    </InfiniteScroll>
  );
};

const mapStateToProps = (state) => {
  return {
    pageNumber: state.gallery.pageNumber,
    maxPageSize: state.gallery.maxPageSize,
    groupId: state.gallery.groupId,
    images: state.gallery.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateImageList: (id, page) => dispatch(addImageList(id, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoLibrary);
