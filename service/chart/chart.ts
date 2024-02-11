export const getChartData = (repos: any[]) => {
    const summarizedValues = repos.reduce((prev, curr) => {
        if (curr && Object.entries(curr).length) {
            Object.entries(curr).forEach((el) => {
                const language = el[0]
                prev[language] = prev[language] ? prev[language] + el[1] : el[1]
            })
        }
        return prev
    }, {})
    return summarizedValues
}
