import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoResSearchAllDomainSuccess, DtoResSearchAllDomainFail } from "@/domains/dto/search/DtoResSearchAllDomain";

export class SearchDomainService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus

        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoResSearchAllDomainSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoResSearchAllDomainFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const searchAllDomainMapper =  new SearchDomainService()

export default searchAllDomainMapper