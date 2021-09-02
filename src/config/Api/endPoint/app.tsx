import url from "../url";

const getAllApp = `${url.baseUrl}/apps`;
const getOneApp = `${url.baseUrl}/app/`;
const postApp = `${url.adminUrl}/app`;
const putApp = `${url.adminUrl}/app/`;
const deleteApp = `${url.adminUrl}/app/`;
export { getAllApp, getOneApp, postApp, putApp, deleteApp };
