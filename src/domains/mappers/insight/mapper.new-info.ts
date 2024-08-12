import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoNewsInfoSuccess, DtoNewsInfoFail } from "@/domains/dto/insight/DtoNewsInfo";

export class NewsInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoNewsInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoNewsInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const newsInfoMapper =  new NewsInfoService()

export default newsInfoMapper