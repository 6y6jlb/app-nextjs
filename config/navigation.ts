import { ILinks } from "./types";

export enum PATH_TYPE_ENUM {
    ID = 'id',
    ROUTE = 'route',
}

export enum LINK_TYPE_ENUM {
    MAIN = 'main',
    SNEAKY = 'sneaky'
}


export const LINKS: ILinks = {
    [LINK_TYPE_ENUM.MAIN]: [
        { path: '/#common', title: 'navigation.common', type: PATH_TYPE_ENUM.ID },
        { path: '/#languages', title: 'navigation.languages', type: PATH_TYPE_ENUM.ID },
        { path: '/#projects', title: 'navigation.projects', type: PATH_TYPE_ENUM.ID },
        { path: '/#contact', title: 'navigation.contact', type: PATH_TYPE_ENUM.ID },
    ],
    [LINK_TYPE_ENUM.SNEAKY]: [
        { path: '/weather', title: 'navigation.weather', type: PATH_TYPE_ENUM.ROUTE },
        { path: '/profile', title: 'navigation.profile', type: PATH_TYPE_ENUM.ROUTE },
        { path: '/tasks', title: 'navigation.tasks', type: PATH_TYPE_ENUM.ROUTE },
    ]
}
