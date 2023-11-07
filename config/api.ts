export const API = {
    POST: {
        NOTIFICATION: `${process.env.NEXT_PUBLIC_LBAS_HOST}/api/notification/email/send`,
    },
    GET: {
        REPOS: 'https://api.github.com/users/6y6jlb/repos',
        LANG: 'https://api.github.com/repos/6y6jlb' //https://api.github.com/repos/6y6jlb/{REPO_NAME}/language
    }
}