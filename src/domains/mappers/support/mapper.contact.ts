import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoContactUsInfoSuccess, DtoContactUsInfoFail } from "@/domains/dto/support/DtoContactUsInfo";

export class ContactUsService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoContactUsInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoContactUsInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const contactUsMapper =  new ContactUsService()

export default contactUsMapper