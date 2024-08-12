import { DtoFulfilled } from "../dto.fulfilled";
import { DtoRejected } from "../dto.rejected";

export class DtoMainInfoSuccess extends DtoFulfilled {
  private dataResponse: any;
  isStatus: boolean = true;

  constructor(dataInfo: any) {
    super();
    this.dataResponse = dataInfo?.value?.payload ?? dataInfo.payload ?? null;
  }

  mapToDataResponse(): any {
    return { isStatus: this.isStatus, ...this.dataResponse };
  }
}

export class DtoMainInfoFail extends DtoRejected {
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
