import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    position: "relative",
  },
  imageDetails: {
    position: "absolute",
    width: "100%",
    bottom: "0px",
    backgroundColor: "white",
    opacity: 0.5,
  },
  author: { textAlign: "right", marginRight: "5px", marginBottom: "3px" },
  title: { textAlign: "center", fontWeight: "bold" },
  description: { textAlign: "center" },
}));
const MasonryGallery = (props) => {
  const classes = useStyles();
  const { images } = props;
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {images.map((el) => (
          <div className={classes.content} key={el.id}>
            <img
              src={el.img}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
            <div className={classes.imageDetails}>
              <div className={classes.title}>{el.title}</div>
              {el.description ? (
                <div className={classes.description}>{el.description}</div>
              ) : null}
              <div className={classes.author}>{`- ${el.owner}`}</div>
            </div>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGallery;
