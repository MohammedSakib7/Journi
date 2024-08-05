// CityCard.tsx
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

interface CityCardProps {
    name: string;
    description: string;
    imageUrl: string;
}

const CityCard: React.FC<CityCardProps> = ({ name, description, imageUrl }) => {
    return (
        <Card className="bg-background rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-32 object-cover"
            />
            <CardHeader className="p-3">
                <CardTitle className="text-md font-semibold">{name}</CardTitle>
                <CardContent>
                    <CardDescription className="text-xs text-muted-foreground">{description}</CardDescription>
                </CardContent>
            </CardHeader>
        </Card>
    );
}

export default CityCard;
