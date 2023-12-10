'use client'

import { sendNotification } from '@/service/notification';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import Form from './Form';
import styles from './styles.module.css';
import React from 'react';

export default function Fedback() {
  const [loading, setLoading] = React.useState(false)


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)


    try {
        const response = await sendNotification({
            contacts: formData.get('contacts'),
            name: formData.get('name'),
            message: formData.get('message')

        })


        toast(response.message, { hideProgressBar: true, type: 'success' })

    } catch (error: any) {
        console.log(error)
        toast(error.message, { hideProgressBar: true, type: 'error' })
    } finally {
      setLoading(false)
    }

}

  return (
    <div className={styles.container}>
        <Form onSubmit={onSubmit} loading={loading}/>
    </div>
  )
}
