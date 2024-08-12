import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoMainInfoSuccess, DtoMainInfoFail } from "@/domains/dto/home/DtoMainInfo";

export class MainInfoMapperService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoMainInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoMainInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const mainInfoMapper =  new MainInfoMapperService()

export default mainInfoMapper