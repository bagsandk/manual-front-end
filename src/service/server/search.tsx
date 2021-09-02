import axios from "axios";
import { postSearchAll, postSearchOne } from "../../config/Api";

const searchAll = async (search: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(`${postSearchAll}`, { Search: search });
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
const searchOne = async (search: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(`${postSearchOne}`, { Search: search });
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

export { searchAll, searchOne };
