import axios from "axios";
import { stringify } from "querystring";
import {
  deleteCategories,
  getAllCategories,
  getCategoriesByManual,
  getOneCategories,
  postCategories,
  putCategories,
} from "../../config/Api";
import headers from "../../config/Api/header";
import { typeData } from "../types";

const fetchAllCategories = async () => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getAllCategories}`);
      resolve({
        error: null,
        isSuccess: true,
        data: data.data,
        isError: false,
        message: data.message,
      });
    } catch (error) {
      reject({
        error: error.name,
        isSuccess: false,
        data: null,
        isError: true,
        message: error.message,
      });
    }
  });
};
const fetchOneCategories = async (categoriesId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getOneCategories}${categoriesId}`);
      resolve({
        error: null,
        isSuccess: true,
        data: data.data,
        isError: false,
        message: data.message,
      });
    } catch (error) {
      reject({
        error: error.name,
        isSuccess: false,
        data: null,
        isError: true,
        message: error.message,
      });
    }
  });
};
const fetchCategoriesByManual = async (manualId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getCategoriesByManual}${manualId}`);
      resolve({
        error: null,
        isSuccess: true,
        data: data.data,
        isError: false,
        message: data.message,
      });
    } catch (error) {
      reject({
        error: error.name,
        isSuccess: false,
        data: null,
        isError: true,
        message: error.message,
      });
    }
  });
};
const insertCategories = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.post(postCategories, stringify(formData), {
        headers: headers,
      });
      resolve({
        error: null,
        isSuccess: true,
        data: data.data,
        isError: false,
        message: data.message,
      });
    } catch (error) {
      reject({
        error: error.name,
        isSuccess: false,
        data: null,
        isError: true,
        message: error.message,
      });
    }
  });
};
const updateCategories = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.put(putCategories, stringify(formData), {
        headers: headers,
      });
      resolve({
        error: null,
        isSuccess: true,
        data: data.data,
        isError: false,
        message: data.message,
      });
    } catch (error) {
      reject({
        error: error.name,
        isSuccess: false,
        data: null,
        isError: true,
        message: error.message,
      });
    }
  });
};
const removeCategories = async (code: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(`${deleteCategories}${code}`, {
        headers: headers,
      });
      resolve({
        error: null,
        isSuccess: true,
        data: data.data,
        isError: false,
        message: data.message,
      });
    } catch (error) {
      reject({
        error: error.name,
        isSuccess: false,
        data: null,
        isError: true,
        message: error.message,
      });
    }
  });
};
export {
  fetchAllCategories,
  fetchOneCategories,
  fetchCategoriesByManual,
  removeCategories,
  insertCategories,
  updateCategories,
};
