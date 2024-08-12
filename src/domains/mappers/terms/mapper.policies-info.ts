import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoPoliciesInfoSuccess, DtoPoliciesInfoFail } from "@/domains/dto/terms/DtoPoliciesInfo";

export class PoliciesInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta?.requestStatus ?? dataInfo?.meta?.requestStatus ?? dataInfo?.status
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoPoliciesInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoPoliciesInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const policiesInfoMapper =  new PoliciesInfoService()

export default policiesInfoMapper