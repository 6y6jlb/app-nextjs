import React from 'react'
import styles from './styles.module.css'

const FormItem = ({ classes = '', children, notification, invalid = false }: IProps) => {


    return (
        <div className={`${styles.item} ${classes}`}>
            {children}
            {notification && (
                <p className={`${styles.notification} ${invalid ? styles.invalid : ''}`}>{notification}</p>
            )}
        </div>
    )
}

export default FormItem

interface IProps {
    classes?: string
    children?: React.ReactNode
    notification?: string
    invalid: boolean

}