import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoTermsInfoSuccess, DtoTermsInfoFail } from "@/domains/dto/terms/DtoTermsInfo";

export class TermsInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta?.requestStatus ?? dataInfo?.meta?.requestStatus ?? dataInfo?.status
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoTermsInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoTermsInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const termsInfoMapper =  new TermsInfoService()

export default termsInfoMapper