'use client'

import { Errors, getFormErrors } from '@/service/error/error';
import { sendNotification } from '@/service/notification/notification';
import React, { FormEvent } from 'react';
import { toast } from 'react-toastify';
import FeedbackForm from './Form';
import styles from './styles.module.css';

export default function Fedback() {
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(new Errors())


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
        setErrors(new Errors(getFormErrors(error.errors)))
      }
      toast(error.message, { hideProgressBar: true, type: 'error' })
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className={styles.container}>
      <FeedbackForm onSubmit={onSubmit} errors={errors} loading={loading} />
    </div>
  )
}
