import axios from 'axios';
import URL from '../constants/url';

class AxiosUtils {
  static TOKEN: string | null = null;

  private static async createHeaders() {
    // const isClient = typeof window !== 'undefined';
    // const token = isClient ? parseCookies().token : AxiosUtils.TOKEN;

    return {
      Authorization: 'Bearer ' + AxiosUtils.TOKEN,
    };
  }

  static setToken(token: string) {
    AxiosUtils.TOKEN = token;
  }

  static async get(path: string, params?: any) {
    return axios.get(URL.FUNCTION + path, {
      headers: await AxiosUtils.createHeaders(),
      params: params,
    });
  }

  static async post(path: string, requestBody?: any) {
    return axios.post(URL.FUNCTION + path, requestBody, {
      headers: await AxiosUtils.createHeaders(),
    });
  }

  static async put(path: string, requestBody?: any) {
    return axios.put(URL.FUNCTION + path, requestBody, {
      headers: await AxiosUtils.createHeaders(),
    });
  }

  static async delete(path: string) {
    return axios.delete(URL.FUNCTION + path, {
      headers: await AxiosUtils.createHeaders(),
    });
  }
}

export default AxiosUtils;
