import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialClientState as initialState } from "@/app/states";

import {
  searchDomainService,
  searchOneDomainService,
  getLatestsNewsService,
  requestContactUsService,
  getSubInfoService,
  getMainInfoService,
  getCategoriesService,
  getNewsService,
  getAnnouncesService,
  getDataFaqsService,
  getTermPolicyCategoriesService,
  getTermDetailService,
  getPolicyDetailService,
  getBannerService,
} from "@/app/services/client";

export const searchAll: any = createAsyncThunk(
  "appClients/searchAll",
  async (param, thunkAPI) => {
    return searchDomainService(param, thunkAPI);
  }
);
export const searchOneDomain: any = createAsyncThunk(
  "appClients/searchOneDomain",
  async (param, thunkAPI) => {
    return searchOneDomainService(param, thunkAPI);
  }
);

export const getLatestsNews: any = createAsyncThunk(
  "appClients/getLatestsNews",
  async (params, thunkAPI) => {
    return getLatestsNewsService(params, thunkAPI);
  }
);

export const getDataFaqs: any = createAsyncThunk(
  "appClients/getDataFaqs",
  async (params, thunkAPI) => {
    return getDataFaqsService(params, thunkAPI);
  }
);

export const getAnnounces: any = createAsyncThunk(
  "appClients/getAnnounces",
  async (params, thunkAPI) => {
    return getAnnouncesService(params, thunkAPI);
  }
);

export const requestContactUs: any = createAsyncThunk(
  "appClients/requestContactUs",
  async (params, thunkAPI) => {
    return requestContactUsService(params, thunkAPI);
  }
);

export const getSubInfo = createAsyncThunk(
  "appClients/getSubInfo",
  async () => {
    return getSubInfoService();
  }
);

export const getMainInfo = createAsyncThunk(
  "appClients/getMainInfo",
  async () => {
    return getMainInfoService();
  }
);

export const getBanners = createAsyncThunk(
  "appClients/getBanners",
  async (params: { useYn: string; lang: string }) => {
    return getBannerService(params);
  }
);

export const getCategories = createAsyncThunk(
  "appClients/getCategories",
  async () => {
    return getCategoriesService();
  }
);

export const getTermPolicyCategories: any = createAsyncThunk(
  "appClients/getTermPolicyCategories",
  async () => {
    return getTermPolicyCategoriesService();
  }
);

export const getTermDetail: any = createAsyncThunk(
  "appClients/getTermDetail",
  async () => {
    return getTermDetailService();
  }
);

export const getPolicyDetail: any = createAsyncThunk(
  "appClients/getPolicyDetail",
  async () => {
    return getPolicyDetailService();
  }
);

export const getNews = createAsyncThunk("appClients/getNews", async () => {
  return getNewsService();
});

export const appClientsSlice = createSlice({
  name: "appClients",
  initialState,
  reducers: {
    showEditDetail: (state, action) => {
      state.showDetail = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.per_page = action.payload;
    },
    setParams: (state, action) => {
      state.params = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setInnerWidth: (state, action) => {
      state.innerWidth = action.payload;
    },
    setLinkTab: (state, action) => {
      state.linkTab = action.payload;
    },
    resetPaging: (state, action) => {
      state.isResetPaging = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  showEditDetail,
  setPage,
  setPerPage,
  setParams,
  setTotal,
  setInnerWidth,
  setLinkTab,
  resetPaging,
} = appClientsSlice.actions;

export default appClientsSlice.reducer;
