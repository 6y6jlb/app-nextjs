import fs from 'fs';
import moment from 'moment';

const fetchRepos = async () => {
    try {
        const reposResponse = await fetch('https://api.github.com/users/6y6jlb/repos', {
            next: { revalidate: 1800 },
        })

        return await reposResponse.json()
    } catch (error) {
        console.dir(error)
    }
}

const fetchRepoLang = async (repoName: string) => {
    try {
        const repoLanguagesResponse = await fetch(`https://api.github.com/repos/6y6jlb/${repoName}/languages`, {
            next: { revalidate: 1800 },
        })

        return await repoLanguagesResponse.json()
    } catch (error) {
        console.dir(error)
    }
}

const updateRepos = async (repos: any) => {
    try {
        fs.writeFile('storage/repos.json', JSON.stringify(repos), function (error) {
            if (error) {
                console.warn(error.message);
            } else {
                console.log('Rate was writed successfully.');
            }
        });
    } catch (error) {

    }
}


export const getRepos = async () => {
    let result: any;
    try {
        const savedReposString = await fs.promises.readFile('storage/repos.json', 'utf-8');
        result = await JSON.parse(savedReposString.toString())
        console.log(result)
        if (!result.timestamp || moment().diff(moment.unix(result.timestamp), 'days') >= 2) {
            const newRepos = await fetchRepos();

            for (let id = 0; id < newRepos.length; id++) {
                const repo = newRepos[id]
                result.data[repo.name] = {...repo, lang_data: await fetchRepoLang(repo.name)}

            }
            result.timestamp = moment();

            updateRepos(result)


        }
    } catch (error) {
        await Promise.resolve(updateRepos({ timestamp: null }))
        result = await getRepos()
    }
    return result
}