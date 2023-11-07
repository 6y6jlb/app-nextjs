import { API } from "@/config/api"
import { FeedBackForm } from "./types"

export const sendNotification = async (formData: FeedBackForm) => {
    try {
        const response = await fetch(API.POST.NOTIFICATION, {
            method: 'POST',
            body: JSON.stringify({
                senderContacts: formData.contacts,
                senderName: formData.name,
                body: formData.message
            }),
        })
        return  await response.json()
    } catch (error) {
        console.dir(error)
    }
}
