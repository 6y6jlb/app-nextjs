import { ILinks } from "./types";

export enum PATH_TYPE_ENUM {
    ID = 'id',
    ROUTE = 'route',
}

export enum LINK_TYPE_ENUM {
    MAIN = 'main',
    SNEAKY_PUBLIC = 'sneaky_public',
    SNEAKY_PRIVATE = 'sneaky_private',
}


export const LINKS: ILinks = {
    [LINK_TYPE_ENUM.MAIN]: [
        { path: '/portfolio#common', title: 'navigation.common', type: PATH_TYPE_ENUM.ID },
        { path: '/portfolio#languages', title: 'navigation.languages', type: PATH_TYPE_ENUM.ID },
        { path: '/portfolio#projects', title: 'navigation.projects', type: PATH_TYPE_ENUM.ID },
        { path: '/portfolio#contact', title: 'navigation.contact', type: PATH_TYPE_ENUM.ID },
    ],
    [LINK_TYPE_ENUM.SNEAKY_PUBLIC]: [
        { path: '/portfolio#common', title: 'navigation.common', type: PATH_TYPE_ENUM.ID },
        { path: '/weather', title: 'navigation.weather', type: PATH_TYPE_ENUM.ROUTE },
        { path: '/auth', title: 'navigation.auth', type: PATH_TYPE_ENUM.ROUTE },
    ],
    [LINK_TYPE_ENUM.SNEAKY_PRIVATE]: [
        { path: '/portfolio/#common', title: 'navigation.common', type: PATH_TYPE_ENUM.ID },
        { path: '/weather', title: 'navigation.weather', type: PATH_TYPE_ENUM.ROUTE },
        { path: '/profile', title: 'navigation.profile', type: PATH_TYPE_ENUM.ROUTE },
        { path: '/tasks', title: 'navigation.tasks', type: PATH_TYPE_ENUM.ROUTE },
        { path: '/auth/logout', title: 'navigation.logout', type: PATH_TYPE_ENUM.ROUTE },
    ],
}
