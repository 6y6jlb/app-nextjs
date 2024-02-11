import { API } from "@/config/api";
import { throwOnError } from "../error/error";
import { IWeather, WeatherForm } from "./types";

export const getWeather = async (formData: WeatherForm, locale: string): Promise<IWeather> => {

    const url = new URL(API.GET.WEATHER);

    url.searchParams.append('locale', locale);
    url.searchParams.append('city', formData.city as string);

    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    await throwOnError(response)

    return await response.json();
}
