import { DtoFulfilled } from "../dto.fulfilled";
import { DtoRejected } from "../dto.rejected";

export type SearchAllDomainProps = {
  exchange: number,
  items?: any[],
  suggestions?: any[],
  isStatus?: boolean
}

export class DtoResSearchAllDomainSuccess extends DtoFulfilled {
  private dataResponse: SearchAllDomainProps;
  isStatus: boolean = true;

  constructor(dataInfo: any) {
    super();
    this.dataResponse = dataInfo?.value?.payload ?? dataInfo.payload ?? null;
  }

  mapToDataResponse<SearchAllDomainProps>(): SearchAllDomainProps {
    return { isStatus: this.isStatus, ...this.dataResponse } as SearchAllDomainProps
  }
}

export class DtoResSearchAllDomainFail extends DtoRejected {
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
