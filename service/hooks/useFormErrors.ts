import { ErrorType, FormErrorType } from "@/config/types";


export default function useFormErrors(errors: ErrorType[]): FormErrorType {
    const resource: FormErrorType = {};
    errors.forEach(errorObject => {
        Object.keys(errorObject).forEach(key => {
            resource[key] = errorObject[key];
        });
    });
    return resource
}