import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function PForm() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Travel Preferences</CardTitle>
        <CardDescription>Tell us about your upcoming trip and we'll help you plan the perfect getaway.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Input id="destination" name="destination" placeholder="Where do you want to go?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="travel-dates">Travel Dates</Label>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex-col items-start w-full h-auto">
                    <span className="font-semibold uppercase text-[0.65rem]">Check in</span>
                    <span className="font-normal">4/2/2024</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex-col items-start w-full h-auto">
                    <span className="font-semibold uppercase text-[0.65rem]">Check out</span>
                    <span className="font-normal">10/2/2024</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="travelers">Number of Travelers</Label>
            <Select name="travelers">
              <SelectTrigger>
                <SelectValue placeholder="Select number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4 Travelers</SelectItem>
                <SelectItem value="5">5 Travelers</SelectItem>
                <SelectItem value="6">6 Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Budget</Label>
            <Input id="budget" name="budget" type="number" placeholder="Enter your budget" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="preferences">Travel Preferences</Label>
          <Textarea
            id="preferences"
            name="preferences"
            placeholder="Tell us about your ideal trip (e.g. activities, accommodation type)"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
