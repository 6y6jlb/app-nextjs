import { API } from "@/config/api"
import { FeedBackForm } from "./types"

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

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json
}
