import axios from "axios";
import { FLICKR_API } from "../../constants/flickr-api-constants";
const instance = axios.create({
  baseURL: FLICKR_API.URL,
  params: {
    api_key: FLICKR_API.KEY,
    format: FLICKR_API.FORMAT,
    nojsoncallback: 1,
    secret: FLICKR_API.SECRET,
  },
});

export default instance;
