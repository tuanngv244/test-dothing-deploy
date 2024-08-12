import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import {
  DtoLatestNewsInfoSuccess,
  DtoLatestNewsInfoFail,
} from "@/domains/dto/insight/DtoLatestNewsInfo";

export class LatestNewsInfoService extends MapperDtoResponse {
  mapToDto(dataInfo: any) {
    const type =
      dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus;
      switch (type) {
        case StatusRes.Fulfilled:
          return new DtoLatestNewsInfoSuccess(dataInfo).mapToDataResponse();
        case StatusRes.Rejected:
          return new DtoLatestNewsInfoFail(dataInfo).mapToDataResponse();
        default:
          return { isStatus: false, message: "Something went wrong" };
      }
  }
}

const latestInfoMapper = new LatestNewsInfoService();

export default latestInfoMapper;
