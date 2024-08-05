'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface City {
    name: string;
    description: string;
    place_id: string; // Added place_id here
}

interface CitySearchProps {
    fetchCities: (searchTerm: string) => Promise<City[]>;
}

const CitySearch = ({ fetchCities }: CitySearchProps) => {
    const [cities, setCities] = useState<City[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm.length >= 3) {
            fetchCities(searchTerm)
                .then(fetchedCities => setCities(fetchedCities))
                .catch(error => {
                    console.error('Error fetching cities:', error);
                    setCities([]);
                });
        } else {
            setCities([]);
        }
    }, [searchTerm, fetchCities]);

    const handleCitySelect = (city: City) => (event: React.MouseEvent<HTMLLIElement>) => {
        // Handle the city selection
        console.log('Selected city:', city.place_id);
        setSearchTerm(city.description);
        setCities([]);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="relative mb-6">
            <Input
                type="search"
                placeholder="Search for cities"
                className="w-full rounded-full bg-muted px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {cities.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {cities.map((city) => (
                        <li
                            key={city.place_id} // Use place_id as the key
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleCitySelect(city)} // Fixed: Return a function for the event handler
                        >
                            {city.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CitySearch;
