import { BaseDtoResponse } from "./dto.response";
import { StatusResponse } from "./dto.response";

export abstract class DtoRejected extends BaseDtoResponse {
    status: StatusResponse = 'rejected'
}