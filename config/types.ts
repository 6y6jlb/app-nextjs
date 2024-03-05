import { LINK_TYPE_ENUM, PATH_TYPE_ENUM, PRIVACY_TYPE_ENUM } from "./navigation";

export interface ILink {
    path: string,
    type: PATH_TYPE_ENUM,
    title: string,
    privacy_type: PRIVACY_TYPE_ENUM,
    onClick?: any,
}

export type ILinks = {
    [K in LINK_TYPE_ENUM]?: ILink[];
};

export type ErrorType = {
    [key: string]: string
}

export type FormErrorType = {
    [key: string]: string
}