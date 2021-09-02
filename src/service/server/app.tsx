import axios from "axios";
import { stringify } from "querystring";
import {
  deleteApp,
  getAllApp,
  getOneApp,
  postApp,
  putApp,
} from "../../config/Api";
import headers from "../../config/Api/header";
import { typeData } from "../types";

const fetchAllApp = async () => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getAllApp}`);
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
const fetchOneApp = async (appId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`${getOneApp}${appId}`);
      resolve({
        error: null,
        isSuccess: true,
        data: data,
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
const insertApp = async (formData: any) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.post(postApp, stringify(formData), {
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
const updateApp = async (formData: any, code: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.put(
        `${putApp}${code}`,
        stringify(formData),
        {
          headers: headers,
        }
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
const removeApp = async (appId: string) => {
  return new Promise<typeData>(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(`${deleteApp}${appId}`, {
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

export { fetchAllApp, fetchOneApp, removeApp, updateApp, insertApp };
