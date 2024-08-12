import { IdData } from "../types/id-data.type";
import { CateTypeProps } from "../types/tree.type";
import { Folder } from "./Folder";

export interface File {
    id?: IdData,
    name?: string,
    size?: string,
    url?: string,
    obj_url?: string,
    category?: CateTypeProps,
    date?: string,
    parentId?: any,
    parentName?: any,
    level?: number,
    children?: File[] | Folder[]
}