import { STORAGE_KEYS_ENUM } from "@/config/storage";
import moment from "moment";

class Cookies {
    public set(key: STORAGE_KEYS_ENUM, value: any) {
        if (document === null) {
            console.warn('document does not exist');
        }

        document.cookie = `${key}=${JSON.stringify(value).slice(1, -1)}; Secure; Expires=${moment().add(1, 'hours').toDate()}`
    }

    public get(key: STORAGE_KEYS_ENUM) {
        if (document === null) {
            console.warn('document does not exist');
        }
        const result = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${key}=`))
            ?.split("=")[1];
        if (!result) {
            throw new Error(`${key} not found`);
        }
        return result;
    }


}

export default new Cookies();