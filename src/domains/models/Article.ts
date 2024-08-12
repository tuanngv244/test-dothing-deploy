import { IdData } from "../types/id-data.type";

export default interface Article {
    id?: IdData,
    title?: string,
    content?: string,
    newsType?: string,
    attachFileUrl?: string,
}