import axios from "axios";
import { stringify } from "querystring";
import {
  deleteManual,
  getAllManual,
  getManualsByApp,
  getOneManual,
  postManual,
  putManual,
} from "../../config/Api";
import headers from "../../config/Api/header";
import { typeData } from "../types";

const fetchAllManual = async () => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getAllManual}`);
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
const fetchOneManual = async (manualId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getOneManual}${manualId}`);
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
const fetchManualsByApp = async (appId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getManualsByApp}${appId}`);
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
const insertManual = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.post(postManual, stringify(formData), {
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
const updateManual = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.put(putManual, stringify(formData), {
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
const removeManual = async (code: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(`${deleteManual}${code}`, {
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
  fetchAllManual,
  fetchOneManual,
  fetchManualsByApp,
  insertManual,
  updateManual,
  removeManual,
};
