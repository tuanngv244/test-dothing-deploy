import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoAnnouncesInfoSuccess, DtoAnnouncesInfoFail } from "@/domains/dto/support/DtoAnnouncesInfo";

export class AnnouncesInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        let type = dataInfo?.value?.meta?.requestStatus ?? dataInfo?.meta?.requestStatus ?? dataInfo?.status
        
        if (dataInfo?.status === 200 && dataInfo) {
            type = 'fulfilled'
        }
        
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoAnnouncesInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoAnnouncesInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const announcesInfoMapper =  new AnnouncesInfoService()

export default announcesInfoMapper