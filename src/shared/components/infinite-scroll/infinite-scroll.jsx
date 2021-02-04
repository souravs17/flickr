import InfiniteScroll from "react-infinite-scroll-component";
// import { Loader } from "../loader";
const UnlimitedScroll = (props) => {
  const { length, next, hasMore, children } = props;
  return (
    <InfiniteScroll
      dataLength={length}
      next={next}
      hasMore={hasMore}
      //   loader={<Loader />}
    >
      {" "}
      {children}
    </InfiniteScroll>
  );
};

export default UnlimitedScroll;
