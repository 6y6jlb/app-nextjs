import { API } from "@/config/api";
import { IWeather, WeatherForm } from "./types";

export const getWeather = async (formData: WeatherForm, locale: string): Promise<IWeather> => {

    const url = new URL(API.GET.WEATHER);

    url.searchParams.append('locale', locale);
    url.searchParams.append('city', formData.city as string);
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await response.json();
    
        if (!response.ok) {
            throw new Error(json.message);
        }
        return json
    } catch (error: any) {
        throw new Error(error.message);
    }

}
