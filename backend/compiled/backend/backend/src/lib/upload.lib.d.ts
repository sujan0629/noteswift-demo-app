export declare const upload: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare function uploadPfpToCloud(userId: string, fileBuffer: Buffer): Promise<string>;
