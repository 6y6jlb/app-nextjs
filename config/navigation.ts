import { logout } from "@/service/auth/auth";
import { ILinks } from "./types";

export enum PATH_TYPE_ENUM {
    ID = 'id',
    ROUTE = 'route',
}

export enum LINK_TYPE_ENUM {
    MAIN = 'main',
    SNEAKY = 'sneaky',
}

export enum PRIVACY_TYPE_ENUM {
    PUBLIC = 'public',
    PRIVATE = 'private',
    ALL = 'all',
}


export const LINKS: ILinks = {
    [LINK_TYPE_ENUM.MAIN]: [
        { path: '/portfolio#common', title: 'navigation.common', type: PATH_TYPE_ENUM.ID, privacy_type: PRIVACY_TYPE_ENUM.ALL },
        { path: '/portfolio#languages', title: 'navigation.languages', type: PATH_TYPE_ENUM.ID, privacy_type: PRIVACY_TYPE_ENUM.ALL },
        { path: '/portfolio#projects', title: 'navigation.projects', type: PATH_TYPE_ENUM.ID, privacy_type: PRIVACY_TYPE_ENUM.ALL },
        { path: '/portfolio#contact', title: 'navigation.contact', type: PATH_TYPE_ENUM.ID, privacy_type: PRIVACY_TYPE_ENUM.ALL },
    ],
    [LINK_TYPE_ENUM.SNEAKY]: [
        { path: '/portfolio#common', title: 'navigation.common', type: PATH_TYPE_ENUM.ID, privacy_type: PRIVACY_TYPE_ENUM.ALL },
        { path: '/weather', title: 'navigation.weather', type: PATH_TYPE_ENUM.ROUTE, privacy_type: PRIVACY_TYPE_ENUM.ALL },
        { path: '/auth', title: 'navigation.auth', type: PATH_TYPE_ENUM.ROUTE, privacy_type: PRIVACY_TYPE_ENUM.PUBLIC },
        { path: '/profile', title: 'navigation.profile', type: PATH_TYPE_ENUM.ROUTE, privacy_type: PRIVACY_TYPE_ENUM.PRIVATE },
        { path: '/tasks', title: 'navigation.tasks', type: PATH_TYPE_ENUM.ROUTE, privacy_type: PRIVACY_TYPE_ENUM.PRIVATE },
        { path: '/auth/logout', title: 'navigation.logout', type: PATH_TYPE_ENUM.ROUTE, privacy_type: PRIVACY_TYPE_ENUM.PRIVATE },
    ],
}
