import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoResSearchDomainSuccess, DtoResSearchDomainFail } from "@/domains/dto/search/DtoResSearchDomain";

export class SearchDomainService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta.requestStatus ?? dataInfo.meta.requestStatus
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoResSearchDomainSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoResSearchDomainFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const searchDomainMapper =  new SearchDomainService()

export default searchDomainMapper