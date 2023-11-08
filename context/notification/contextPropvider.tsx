import React from "react";
import { NotificationsProviderProps, NotificationState, NotificationDispatch } from "./types";
import { notificationsReducer } from "./notificationReducer";

const NotificationsContext = React.createContext<{ state: NotificationState; dispatch: NotificationDispatch } | undefined>(undefined);

export const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(notificationsReducer, { notifications: [] });

  return (
    <NotificationsContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationsContext.Provider>
  )
};
