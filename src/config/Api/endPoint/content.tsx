import url from "../url";

const getAllContent = `${url.baseUrl}/contents`;
const getContentsByManualCode = `${url.baseUrl}/contentsIn/`;
const getOneContent = `${url.baseUrl}/content/`;
const postContent = `${url.adminUrl}/content/`;
const putContent = `${url.adminUrl}/content/`;
const deleteContent = `${url.adminUrl}/content/`;
export {
  getAllContent,
  getContentsByManualCode,
  getOneContent,
  postContent,
  putContent,
  deleteContent,
};
