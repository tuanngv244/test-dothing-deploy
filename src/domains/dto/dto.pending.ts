import { BaseDtoResponse } from "./dto.response";
import { StatusResponse } from "./dto.response";

export abstract class DtoPending extends BaseDtoResponse {
    status: StatusResponse = 'pending'
}