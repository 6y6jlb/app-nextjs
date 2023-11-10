'use client'

import { NotificationsContext } from '@/context/notification/contextPropvider';
import React from 'react'

export const Notification = () => {

    const context = React.useContext(NotificationsContext);

    if (!context) {
        throw new Error('useNotification must be used within a NotificationsProvider');
      }
  
    const { state, dispatch } = context;

    console.log(state.notifications)

  return (
    <div></div>
  )
}
