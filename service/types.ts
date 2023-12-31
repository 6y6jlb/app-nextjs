import { OPEN_WEATHER_UNITS } from "@/config/weather";
import { IAuthForm as IAuthFormClient } from '../components/auth/types';
import { EVENT_ENUM } from "./const";

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

export interface WeatherForm {
    city: FormDataEntryValue | null;
}

export interface IWeather {

    city?: string
    units: OPEN_WEATHER_UNITS
    lang?: string
    icon?: string

    "coord": {
        "lon": Number // 10.99,
        "lat": Number // 44.34
    },
    "weather": [
        {
            "id": Number // 501,
            "main": String // "Rain",
            "description": String // "moderate rain",
            "icon": String // "10d"
        }
    ],
    "base": String // "stations",
    "main": {
        "temp": Number // 298.48,
        "feels_like": Number // 298.74,
        "temp_min": Number //  297.56,
        "temp_max": Number // 300.05,
        "pressure": Number // 1015,
        "humidity": Number // 64,
        "sea_level": Number // 1015,
        "grnd_level": Number // 933
    },
    "visibility": Number // 10000,
    "wind": {
        "speed": Number // 0.62,
        "deg": Number // 349,
        "gust": Number // 1.18
    },
    "rain": {
        "1h": Number // 3.16
    },
    "clouds": {
        "all": Number // 100
    },
    "dt": Date //1661870592,
    "sys": {
        "type": Number // 2,
        "id": Number // 2075663,
        "country": String // "IT",
        "sunrise": Date // 1661834187,
        "sunset": Date // 1661882248
    },
    "timezone": Number // 7200,
    "id": Number // 3163858,
    "name": String // "Zocca",
    "cod": Number // 200

}

export type AuthForm = IAuthFormClient & {
    locale: string
}

export type RegisterPayload = Omit<AuthForm, 'locale' | 'already_register' | 'entry_type'> & {
    email?: string,
    telegram_id?: string
}

export type LoginPayload = Pick<AuthForm, 'password'> & {
    email?: string,
    telegram_id?: string
}

export type AuthResponse = {
    access_token: string
}

export type User = {
    _id: string,
    telegram_id?: number | string,
    email?: string,
    created_at: Date,
    name: string,
    tz?: string,
    location?: string,
    currency?: string,
    locale?: string,
    hash?: string,
    salt?: string
}

export interface IOption {
    event_type: EVENT_ENUM,
    param: string
}


export type Task = {
    _id: string,
    last_call?: Date,
    user_id: number | string,
    options: Array<IOption>,
    call_at: string,
    queue?: boolean,
    tz: string,
    is_regular: boolean,
}