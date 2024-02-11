import { STORAGE_KEYS_ENUM } from "@/config/storage";

class LS {
    public set(key: STORAGE_KEYS_ENUM, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    public get(key: STORAGE_KEYS_ENUM) {
        const result = localStorage.getItem(key)
        if (!result) {
            throw new Error(`${key} not found`);
        }
        return result;
    }


}

export default new LS();