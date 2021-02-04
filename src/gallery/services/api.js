import { FLICKR_API } from "../../constants/flickr-api-constants";
import http from "../../shared/services/http";

const getImageList = async (id, page, pageSize = 20) => {
  let data = { list: [], max: 1 };
  try {
    let response = await http.get("rest/", {
      params: {
        method: FLICKR_API.IMAGE_LIST_ENDPOINT,
        group_id: id,
        page: page,
        per_page: pageSize,
        extras: "url_s,description",
      },
    });
    data.list = response.data.photos.photo.map((el) => {
      return {
        id: el.id,
        title: el.title,
        description: el.description["_content"],
        owner: el.ownername,
        img: el.url_s,
      };
    });
    data.max = response.data.photos.pages;
  } catch (e) {
  } finally {
    return data;
  }
};

export { getImageList };
