
export const takeLanguages = (reposData: object) => {
    return Object.values(reposData).map((el: any) => el.lang_data ?? [])
}