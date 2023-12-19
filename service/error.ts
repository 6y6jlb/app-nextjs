import { ErrorType, FormErrorType } from "@/config/types";

export const throwOnError = async (response: Response) => {
    if (response.ok) {
        return;
    }

    // todo: handle JSON parse errors
    const json = await response.json();

    const responseError = {
        type: 'Error',
        message: json.message || response.statusText || 'Something went wrong',
        code: response.status || '',
        errors: json.errors
    };
    let error = new Error();

    error = { ...error, ...responseError };

    throw error;
};


export class Errors {
    private errors: FormErrorType;

    constructor(errors?: FormErrorType) {
        this.errors = errors || {};
    }

    public has(field: string): boolean {
        return Object.prototype.hasOwnProperty.call(this.errors, field);
    }

    public any(): boolean {
        return Object.keys(this.errors).length > 0;
    }


    public get(field: string): string | undefined {
        if (this.errors[field]) {
            return this.errors[field];
        }
    }
}


export const getFormErrors = (errors: ErrorType[]): FormErrorType => {
    const resource: FormErrorType = {};
    errors.forEach(errorObject => {
        Object.keys(errorObject).forEach(key => {
            resource[key] = errorObject[key];
        });
    });
    return resource
}

