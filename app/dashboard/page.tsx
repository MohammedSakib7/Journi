import CitySearch from '@/app/ui/citysearch';
import CityCard from '@/app/ui/citycard';
import { fetchCitiesFromBackend } from '@/lib/data';

const ccities = [
    { name: 'New York', description: 'The city that never sleeps.', imageUrl: '/vercel.svg' },
    { name: 'Los Angeles', description: 'The entertainment capital of the world.', imageUrl: '/vercel.svg' },
    { name: 'Chicago', description: 'Known for its impressive architecture.', imageUrl: '/vercel.svg' },
    { name: 'Houston', description: 'A bustling metropolis in Texas.', imageUrl: '/vercel.svg' },
    { name: 'Phoenix', description: 'A city with a vibrant arts scene.', imageUrl: '/vercel.svg' },
    { name: 'San Francisco', description: 'Famous for the Golden Gate Bridge.', imageUrl: '/vercel.svg' },
];

export default function Dashboard() {
  const handleCitySelect = (city: { name: string; description: string; place_id: string }) => {
    // Handle the city selection (e.g., update state or navigate to a different page)
    console.log('Selected city:', city);
  };
  return (
    <div className="w-full max-w-3xl mx-auto px-3 md:px-4 py-6">
      <CitySearch fetchCities={fetchCitiesFromBackend}/>
      {/* Display city cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ccities.map((city, index) => (
                <CityCard
                    key={index}
                    name={city.name}
                    description={city.description}
                    imageUrl={city.imageUrl}
                />
            ))}
        </div>
    </div>
  );
}