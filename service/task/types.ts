import { EVENT_ENUM } from "@/config/event"


export type OptionType = {
    event_type: EVENT_ENUM,
    param: string
}

export type TaskType = {
    _id: string,
    last_call?: Date,
    user_id: string,
    options: Array<OptionType>,
    call_at: string,
    queue?: boolean,
    tz: string,
    is_regular: boolean,
}