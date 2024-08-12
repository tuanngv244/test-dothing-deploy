import { BaseDtoResponse } from "./dto.response";
import { StatusResponse } from "./dto.response";

export abstract class DtoFulfilled extends BaseDtoResponse {
    status: StatusResponse = 'fulfilled'
}