export enum StatusRes {
    Rejected = 'rejected',
    Fulfilled = 'fulfilled',
    Pending = 'pending'
}

export type StatusResponse = `${StatusRes}`

export abstract class BaseDtoResponse {
    abstract status: StatusResponse;
    abstract mapToDataResponse<T>(): T;
}