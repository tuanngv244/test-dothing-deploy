import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoTermPolicyCategoriesInfoSuccess, DtoTermPolicyCategoriesInfoFail } from "@/domains/dto/terms/DtoTermPolicyCategoriesInfo";

export class CategoryInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta?.requestStatus ?? dataInfo?.meta?.requestStatus ?? dataInfo?.status
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoTermPolicyCategoriesInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoTermPolicyCategoriesInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const termPolicyCatesInfoMapper =  new CategoryInfoService()

export default termPolicyCatesInfoMapper