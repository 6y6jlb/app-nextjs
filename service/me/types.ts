export type User = {
    _id: string,
    telegram_id?: number | string,
    email?: string,
    created_at: Date,
    name: string,
    tz?: string,
    location?: string,
    currency?: string,
    locale?: string,
    hash?: string,
    salt?: string
}