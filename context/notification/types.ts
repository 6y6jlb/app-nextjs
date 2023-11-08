import { NOTIFICATION_TYPE_ENUM, NOTIFICATION_ACTION_TYPE_ENUM } from "./const";

export interface Notification {
    id: string;
    message: string;
    type: NOTIFICATION_TYPE_ENUM;
}

export type NotificationAction =
    | { type: NOTIFICATION_ACTION_TYPE_ENUM.ADD_NOTIFICATION; notification: Notification }
    | { type: NOTIFICATION_ACTION_TYPE_ENUM.REMOVE_NOTIFICATION; id: string };

export interface NotificationState {
    notifications: Notification[];
}

export type NotificationDispatch = (action: NotificationAction) => void;


export interface NotificationsProviderProps {
    children: React.ReactNode;
}