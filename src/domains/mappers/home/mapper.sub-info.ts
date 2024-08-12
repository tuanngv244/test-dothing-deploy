import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoSubInfoSuccess, DtoSubInfoFail } from "@/domains/dto/home/DtoSubInfo";

export class SubInfoMapperService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoSubInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoSubInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const subInfoMapper =  new SubInfoMapperService()

export default subInfoMapper