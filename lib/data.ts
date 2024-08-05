'use client';

import GoogleMapsAutocomplete from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';

export async function fetchCities(searchTerm: string){
    if (searchTerm.length >= 3) {
        try {
            const response = await fetch(`/api/fetchCities?searchTerm=${encodeURIComponent(searchTerm)}`);
            const predictions = await response.json();
            return predictions.slice(0, 5); // Limit to 5 results
        } catch (error) {
            console.error('Error fetching cities:', error);
            return [];
        }
    } else {
        return [];
    }
};

export async function fetchCitiesFromBackend(searchTerm: string){
    const response = await fetch(`/api/cities?searchTerm=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    return data.cities;
};
   