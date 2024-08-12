import { DtoFulfilled } from "../dto.fulfilled";
import { DtoRejected } from "../dto.rejected";
import { DEFAULT_PER_PAGE } from "@/@core/configs";

export class DtoAnnouncesInfoSuccess extends DtoFulfilled {
  private dataResponse: any;
  isStatus: boolean = true;

  constructor(dataInfo: any) {
    super();

    this.dataResponse = dataInfo?.value?.payload ?? dataInfo?.payload ?? dataInfo?.value?.data ?? dataInfo?.data ?? null;
  }

  mapToDataResponse(): any {
    let data: any = this.dataResponse

    if (!data) {
      return { isStatus: this.isStatus, dataResponse: data };
    }

    data.contents = data?.contents?.map((item: any, index: number) => {
      let nItem = { ...item }
      let newIndex = data?.currentPage * DEFAULT_PER_PAGE + index;
      return {...nItem, order: newIndex}
    })

    return { isStatus: this.isStatus, dataResponse: data };
  }
}

export class DtoAnnouncesInfoFail extends DtoRejected {
  private dataError: any;
  isStatus: boolean = false;

  constructor(dataInfo: any) {
    super();
    this.dataError = dataInfo?.value?.error ?? dataInfo.error ?? null;
  }

  mapToDataResponse(): any {
    return { isStatus: this.isStatus, ...this.dataError };
  }
}
