export const API = {
    POST: {
        NOTIFICATION: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/notification/email/send`,
        LOGIN: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/auth/login`,
        REGISTER: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/auth/register`,
        TASKS: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/tasks`,
    },
    GET: {
        REPOS: 'https://api.github.com/users/6y6jlb/repos',
        LANG: 'https://api.github.com/repos/6y6jlb', //https://api.github.com/repos/6y6jlb/{REPO_NAME}/language
        WEATHER: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/weather`,
        USERS: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/users`,
        ME: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/me`,
        TASKS: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/tasks`,
    },
    PUT: {
        ME: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/me`,
        TASKS: `${process.env.NEXT_PUBLIC_DEFAULT_HOST}/api/tasks`,
    }
}