'use client'
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";
import { sendNotification } from '@/service/notification';
import React from 'react';
import { NotificationsContext } from '@/context/notification/contextPropvider';
import { NOTIFICATION_ACTION_TYPE_ENUM, NOTIFICATION_TYPE_ENUM } from '@/context/notification/const';

export default function FeedbackForm() {
    const t = useTranslations("common");
    
    const context = React.useContext(NotificationsContext);

    if (!context) {
        throw new Error('useNotification must be used within a NotificationsProvider');
      }
  
    const { state, dispatch } = context;

    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

       
       try {
        const response = await sendNotification({
            contacts: formData.get('contacts'),
            name: formData.get('name'),
            message: formData.get('message')
            
    })

    dispatch({type: NOTIFICATION_ACTION_TYPE_ENUM.ADD_NOTIFICATION, notification: {id: Math.random()*100 + ':notification', message: response.message, type: NOTIFICATION_TYPE_ENUM.SUCCESS} } )

       } catch (error:any) {
        dispatch({type: NOTIFICATION_ACTION_TYPE_ENUM.ADD_NOTIFICATION, notification: {id: Math.random()*100 + ':notification', message: error.message, type: NOTIFICATION_TYPE_ENUM.SUCCESS} } )
       }

    }
    return (

        <form className={style['feedback-form']} onSubmit={onSubmit}>
            <input

                placeholder={"contacts/email/phone"}
                name={"contacts"}
                type="text"
                className={style.item}
            />
            <input
                placeholder={"name"}
                name={"name"}
                type="text"
                className={style.item}
            />
            <textarea
                name={"message"}
                placeholder={"message"}
                className={style.item}
            />
            <button
                className={style.button}
                disabled={false}
            >
                {t('button.send')}
            </button>
        </form>

    )
}



