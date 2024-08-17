import { useState } from"react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {

  const [location, setLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleFind = () => {
    console.log("Selected Service:", selectedService);
    // Here you can perform the action needed when the Find button is clicked
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Searching for nearby clinical services?</CardTitle>
        <CardDescription>We got you! Just with few clicks.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Location</Label>
              <Input id="name" placeholder="Name of your location" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="service">Services</Label>
              <Select
                value={selectedService}
                onValueChange={(value) => setSelectedService(value)}
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="primary">Primary Care</SelectItem>
                  <SelectItem value="child">Child Care</SelectItem>
                  <SelectItem value="specialty">Specialty Care</SelectItem>
                  <SelectItem value="mental">Mental Health Service</SelectItem>
                  <SelectItem value="women">Women's Health Service</SelectItem>
                  <SelectItem value="surgical">Surgical Service</SelectItem>
                  <SelectItem value="urgent">Urgent Care</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setSelectedService("")}>Cancel</Button>
        <Button onClick={handleFind}>Find</Button>
      </CardFooter>
    </Card>
  )
}
