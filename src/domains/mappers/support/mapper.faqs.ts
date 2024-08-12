import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoFaqsInfoSuccess, DtoFaqsInfoFail } from "@/domains/dto/support/DtoFaqsInfo";

export class FaqsInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        let type = dataInfo?.value?.meta?.requestStatus ?? dataInfo?.meta?.requestStatus ?? dataInfo?.status

        if (dataInfo?.status === 200 && dataInfo) {
            type = 'fulfilled'
        }

        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoFaqsInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoFaqsInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const faqsInfoMapper =  new FaqsInfoService()

export default faqsInfoMapper