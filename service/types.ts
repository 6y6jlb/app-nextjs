
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


export interface FeedBackForm {
    name: FormDataEntryValue | null;
    contacts: FormDataEntryValue | null;
    message: FormDataEntryValue | null
  
  }