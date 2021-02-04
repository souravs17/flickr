import { FLICKR_API } from "../../constants/flickr-api-constants";
import http from "../../shared/services/http";

const getAutoCompleteSuggestions = async (text, pageSize) => {
  let data = [];
  try {
    let response = await http.get("rest/", {
      params: {
        method: FLICKR_API.GROUP_LIST_ENDPOINT,
        text: text,
        per_page: pageSize,
      },
    });
    data = response.data.groups.group.map((el) => el.name);
  } catch (e) {
  } finally {
    return data;
  }
};

const getGroupList = async (text, page, pageSize = 20) => {
  let data = { list: [], max: 1 };
  try {
    let response = await http.get("rest/", {
      params: {
        method: FLICKR_API.GROUP_LIST_ENDPOINT,
        text: text,
        page: page,
        per_page: pageSize,
      },
    });
    data.max = response.data.groups.pages;
    let groupIdList = response.data.groups.group.map((el) => el.nsid);

    let promises = groupIdList.map((el) => {
      const groupInfo = getGroupInfo(el);
      return groupInfo;
    });
    response = await Promise.all(promises);
    data.list = response.map((el) => {
      const {
        data: {
          group: {
            nsid,
            name,
            iconurls,
            members,
            pool_count,
            topic_count,
            datecreate,
          },
        },
      } = el;
      return {
        id: nsid,
        name: name["_content"],
        img: iconurls["default"],
        members: members["_content"],
        pictures: pool_count["_content"],
        comments: topic_count["_content"],
        date: new Date(datecreate["_content"].replace(/-/g, "/")).getFullYear(),
      };
    });
  } catch (e) {
  } finally {
    return data;
  }
};

const getGroupInfo = async (id) => {
  let groupInfo = [];
  try {
    groupInfo = await http.get("rest/", {
      params: {
        extras: "icon_urls_deep",
        method: FLICKR_API.GROUP_INFO_ENDPOINT,
        group_id: id,
      },
    });
  } catch (e) {
  } finally {
    return groupInfo;
  }
};

export { getAutoCompleteSuggestions, getGroupList };
