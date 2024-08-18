import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";
  
  const locations = [
    {
      location: "Taman Bukit Jalil",
      name: "Medilove Clinic",
      time: "8:00am - 10:00pm",
      service: "Primary Care",
    },
    {
      location: "Sri Petaling",
      name: "Medilove Clinic",
      time: "6:30am - 10:00pm",
      service: "Primary Care",
    },
    {
      location: "Sri Petaling",
      name: "Medilove Clinic",
      time: "6:00am - 10:00pm",
      service: "Primary Care",
    },
    {
        location: "Sri Petaling",
        name: "Medilove Clinic",
        time: "6:00am - 10:00pm",
        service: "Primary Care",
    },
    {
      location: "Sri Petaling",
      name: "Medilove Clinic",
      time: "6:00am - 10:00pm",
      service: "Primary Care",
    },
    {
      location: "Sri Petaling",
      name: "Medilove Clinic",
      time: "6:00am - 10:00pm",
      service: "Primary Care",
    },
  ]
  
  export function TableDemo() {
    const [selectedLocation, setSelectedLocation] = useState<any>(null);
    const handleBookAppointment = (location: any) => {
        // Handle the booking logic here
        setSelectedLocation(location);
      };

    return (
      <div className="p-4 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
        <Table className="w-[600px]">
            <TableCaption>A list of your search results.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[200px]">Nearest Location</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Services</TableHead>
                <TableHead>Opening Hours</TableHead>
                <TableHead className="text-right">Action</TableHead> {/* Changed Header */}
                </TableRow>
            </TableHeader>
            <TableBody>
                {locations.map((location) => (
                <TableRow key={location.location}>
                    <TableCell className="font-medium">{location.location}</TableCell>
                    <TableCell>{location.name}</TableCell>
                    <TableCell>{location.service}</TableCell>
                    <TableCell>{location.time}</TableCell>
                    <TableCell className="text-right">
                    <Button onClick={() => handleBookAppointment(location.location)}>Book Appointment</Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                <TableCell colSpan={4}>Total</TableCell> {/* Adjusted colspan */}
                <TableCell className="text-right"> {/* Action column removed from footer */}
                </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        {selectedLocation && (
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Booking Appointment</CardTitle>
            <CardDescription>
              You are booking an appointment at {selectedLocation.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p><strong>Clinic Name:</strong> {selectedLocation.paymentStatus}</p>
            <p><strong>Service:</strong> {selectedLocation.paymentMethod}</p>
            <p><strong>Opening Hours:</strong> {selectedLocation.totalAmount}</p>
          </CardContent>
          <CardFooter className="mt-4">
            <Button variant="outline" onClick={() => setSelectedLocation(null)}>
              Cancel
            </Button>
            <Button>Confirm Appointment</Button>
          </CardFooter>
        </Card>
      )}
      </div>
  );
}
  