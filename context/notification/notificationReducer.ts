import { NotificationAction, NotificationState } from "@/context/notification/types";



export const notificationsReducer = (state: NotificationState, action: NotificationAction): NotificationState => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return {
                ...state,
                notifications: [...state.notifications, action.notification],
            };
        case 'REMOVE_NOTIFICATION':
            return {
                ...state,
                notifications: state.notifications.filter(
                    notification => notification.id !== action.id
                ),
            };
        default:
            return state;
    }
};