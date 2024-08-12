import { File } from "../models/File";
import { Folder } from "../models/Folder";
import { CateType } from "../types/tree.type";

export const dataTrees: File[] | Folder[] = [
    { 
        id: '1', name: 'folder1', category: CateType.FOLDER, date: '-', size: '-', parentId: null,
        children: [
            { id: '1_1', name: 'folder1_test1.txt', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '1', parentName: 'folder1' },
            { id: '1_2', name: 'folder1_test2.txt', size: '14.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '1', parentName: 'folder1' },
            { id: '1_3', name: 'folder1_test3.txt', size: '40.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '1', parentName: 'folder1' },
        ]
    },
    {
        id: '2', name: 'folder2', category: CateType.FOLDER, date: '-', size: '-', parentId: null,
        children: [
            { 
                id: '2_1', name: 'folder2_test1', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.FOLDER, date: '2023-01-01 00:00', parentId: '2', parentName: 'folder2', 
                children: [
                    { id: '2_1_1', name: 'folder2_test1_test1', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '2_1', parentName: 'folder2_test1'},
                    { id: '2_1_2', name: 'folder2_test1_test2', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '2_1', parentName: 'folder2_test1'},
                    { 
                        id: '2_1_3', name: 'folder2_test1_test3', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.FOLDER, date: '2023-01-01 00:00', parentId: '2_1', parentName: 'folder2_test1', 
                        children: [
                            { id: '2_1_3_1', name: 'folder2_test1_test3_test1', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '2_1_3', parentName: 'folder2_test1_test3' }
                        ]
                    },
                ]
            },
            { id: '2_2', name: 'folder2_test2.txt', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '2', parentName: 'folder2'},
            { id: '2_3', name: 'folder2_test3.txt', size: '4.0B', url: 'https://example.com', obj_url: 'https://example.com', category: CateType.TXT, date: '2023-01-01 00:00', parentId: '2', parentName: 'folder2'}
        ]
    },
    { id: '3', name: 'text3', category: CateType.TXT, date: '-', size: '-', parentId: null },
    { id: '4', name: 'text4', category: CateType.TXT, date: '-', size: '-', parentId: null },
    { id: '5', name: 'text5', category: CateType.TXT, date: '-', size: '-', parentId: null },
]