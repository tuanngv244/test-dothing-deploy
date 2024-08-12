import { DtoFulfilled } from "../dto.fulfilled";
import { DtoRejected } from "../dto.rejected";

export class DtoPoliciesInfoSuccess extends DtoFulfilled {
  private dataResponse: any;
  isStatus: boolean = true;

  constructor(dataInfo: any) {
    super();
    this.dataResponse = dataInfo?.value?.payload ?? dataInfo?.payload ?? dataInfo?.value?.data ?? null;
  }

  mapToDataResponse(): any {
    if (!this.dataResponse) {
      return { isStatus: this.isStatus, dataResponse: this.dataResponse };
    }

    return { isStatus: this.isStatus, dataResponse: this.dataResponse };
  }
}

export class DtoPoliciesInfoFail extends DtoRejected {
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
