
export type Repos = {
    timestamp: string | null | undefined;
    data: ReposData;
};

export type ReposData = {
    [repo_name: string]: Repo;
};

export type Repo = {
    [key: string]: any;
};
