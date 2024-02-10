import moment from "moment";

export const DEFAULT_TASK_FORM = {
    tz: 'Asia/Tbilisi',
    call_at: moment().add(10, 'hours'),
    is_regular: true,
    options: []
}

export const DEFAULT_OPTION = {
    event_type: 'WEATHER',
    param: 'Tbilisy'
}