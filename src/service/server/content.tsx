import axios from "axios";
import { stringify } from "querystring";
import {
  deleteContent,
  getAllContent,
  getContentsByManualCode,
  getOneContent,
  postContent,
  putContent,
} from "../../config/Api";
import headers from "../../config/Api/header";
import { typeData } from "../types";

const fetchAllContent = async () => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getAllContent}`);
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
const fetchOneContent = async (contentId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getOneContent}${contentId}`);
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
const fetchContentsByManualCode = async (manualCode: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(
        `${getContentsByManualCode}${manualCode}`
      );
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
const insertContent = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.post(postContent, stringify(formData), {
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
const updateContent = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.put(putContent, stringify(formData), {
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
const removeContent = async (code: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(`${deleteContent}${code}`, {
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
  fetchAllContent,
  fetchOneContent,
  fetchContentsByManualCode,
  removeContent,
  insertContent,
  updateContent,
};
