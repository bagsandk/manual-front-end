import url from "../url";

const getAllManual = `${url.baseUrl}/manuals`;
const getManualsByApp = `${url.baseUrl}/manualsByApp/`;
const getOneManual = `${url.baseUrl}/manual/`;
const postManual = `${url.adminUrl}/manual/`;
const putManual = `${url.adminUrl}/manual/`;
const deleteManual = `${url.adminUrl}/manual/`;
export {
  getAllManual,
  getManualsByApp,
  getOneManual,
  putManual,
  postManual,
  deleteManual,
};
