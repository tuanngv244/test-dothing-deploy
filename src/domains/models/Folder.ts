import { IdData } from "../types/id-data.type";
import { CateTypeProps } from "../types/tree.type";
import { File } from "./File";

export interface Folder {
    id?: IdData,
    name?: string,
    category?: CateTypeProps,
    date?: string,
    size?: string,
    parentId?: any,
    parentName?: string
    level?: number,
    children: Folder[] | File[]
}