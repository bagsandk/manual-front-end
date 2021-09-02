import url from "../url";

const getAllCategories = `${url.baseUrl}/categories`;
const getCategoriesByManual = `${url.baseUrl}/categoriesByManual/`;
const getOneCategories = `${url.baseUrl}/category/`;
const postCategories = `${url.adminUrl}/category/`;
const putCategories = `${url.adminUrl}/category/`;
const deleteCategories = `${url.adminUrl}/category/`;
export {
  getAllCategories,
  getCategoriesByManual,
  getOneCategories,
  postCategories,
  putCategories,
  deleteCategories
};
