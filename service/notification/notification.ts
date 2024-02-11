import { API } from "@/config/api"
import { FeedBackForm } from "../types"
import { throwOnError } from "../error/error"

export const sendNotification = async (formData: FeedBackForm) => {
    const response = await fetch(API.POST.NOTIFICATION, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contacts: formData.contacts,
            name: formData.name,
            message: formData.message
        }),
    })

    await throwOnError(response)

    return await response.json();
}
