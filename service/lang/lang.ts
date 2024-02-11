import { ReposData } from "../repos/types"



export const takeLanguages = (repos: ReposData): TakeLanguages => {
    return Object.values(repos).map((el) => el.lang_data ?? [])
}

export type TakeLanguages = number[]