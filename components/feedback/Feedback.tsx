'use client'

import { sendNotification } from '@/service/notification';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';
import Form from './Form';
import styles from './styles.module.css';
import React from 'react';
import { ErrorType } from '@/config/types';

export default function Fedback() {
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState([] as ErrorType[])


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
      if (error.code === 422) {
        console.log(error)
        setErrors(error.errors)
      }
      toast(error.message, { hideProgressBar: true, type: 'error' })
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} errors={errors} loading={loading} />
    </div>
  )
}
