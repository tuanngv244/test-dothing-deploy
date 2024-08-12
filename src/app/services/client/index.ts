import api from "@/@core/utils/api";
import axios from "axios";

const version = "";
const namespace = "/kica/front";
const resource = `${namespace}`;

// ----- SmarteeVina server ----- //
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseModules = {
  NEWS: "/post",
  FAQ: "/faq",
  STATISTICS: "/statistics",
  CONTACT_US: "/contact-us",
  BANNER: "/banner",
};

type ParamProps = {
  params?: any;
  thunkAPI?: any;
  data?: any;
};

export const searchDomainService = async (params: any, thunkAPI?: any) => {
  try {
    const resp = await api.get(`${resource}/domain/searchAll`, { params });
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const searchOneDomainService = async (param: any, thunkAPI?: any) => {
  try {
    const resp = await api.get(`${resource}/domain/search/${param}`);
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getLatestsNewsService = async (params: any, thunkAPI?: any) => {
  try {
    const resp = await axios.get(`${baseUrl}${baseModules.NEWS}/pub/list`, {
      params,
    });
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getLatestsNewDetailService = async (id: string) => {
  try {
    const resp = await axios.get(`${baseUrl}${baseModules.NEWS}/pub/${id}`);
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const requestContactUsService = async (data: any, thunkAPI?: any) => {
  try {
    const resp = await axios.post(
      `${baseUrl}${baseModules.CONTACT_US}/pub/save`,
      data
    );
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getSubInfoService = async () => {
  try {
    const resp = await api.get(`${resource}/main/getSubInfo`);
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMainInfoService = async () => {
  try {
    const resp = await axios.get(
      `${baseUrl}${baseModules.STATISTICS}/pub/statistics`
    );
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getBannerService = async (params: {
  useYn: string;
  lang: string;
}) => {
  try {
    const resp = await axios.get(`${baseUrl}${baseModules.BANNER}/pub/list`, {
      params: params,
    });
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getNewsService = async () => {
  try {
    const resp = await api.get(
      `${resource}/news/searchAll?pageNo=1&pageSize=9&sortBy=orderDate&sortDirection=DESC`
    );
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCategoriesService = async () => {
  try {
    const resp = await api.get(`${resource}/news/category/get`);
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAnnouncesService = async (params: any, thunkAPI?: any) => {
  try {
    const resp = await api.get(`${resource}/announcements/findAllWithSpec`, {
      params,
    });
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDataFaqsService = async (params: any, thunkAPI?: any) => {
  try {
    const resp = await axios.get(`${baseUrl}${baseModules.FAQ}/pub/list`, {
      params,
    });
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTermPolicyCategoriesService = async () => {
  try {
    const resp = await api.get(`${resource}/term/category/get`);
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTermDetailService = async () => {
  try {
    const resp = await api.get(
      `${resource}/term/searchAll?pageNo=1&pageSize=10&sortBy=termVersion&sortDirection=DESC&category=Terms of Use`
    );
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPolicyDetailService = async () => {
  try {
    const resp = await api.get(
      `${resource}/term/searchAll?pageNo=1&pageSize=10&sortBy=termVersion&sortDirection=DESC&category=Privacy Policy`
    );
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
