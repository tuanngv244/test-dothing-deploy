import { MapperDtoResponse } from "../mapper.response";
import { StatusRes } from "@/domains/dto/dto.response";
import { DtoCategoriesInfoSuccess, DtoCategoriesInfoFail } from "@/domains/dto/insight/DtoCategoriesInfo";

export class CategoryInfoService extends MapperDtoResponse {
    mapToDto(dataInfo: any) {
        const type = dataInfo?.value?.meta?.requestStatus ?? dataInfo?.meta?.requestStatus ?? dataInfo?.status
        switch(type) {
            case StatusRes.Fulfilled:
                return new DtoCategoriesInfoSuccess(dataInfo).mapToDataResponse()
            case StatusRes.Rejected:
                return new DtoCategoriesInfoFail(dataInfo).mapToDataResponse()
            default: 
                return { isStatus: false, message: 'Something went wrong' }
        }
    }
}

const categoriesInfoMapper =  new CategoryInfoService()

export default categoriesInfoMapper