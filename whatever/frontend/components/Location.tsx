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
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";

const locations = [
    {
        location: "Taman Bukit Jalil",
        name: "Medilove Clinic",
        time: "8:00am - 10:00pm",
        service: "Primary Care",
    },
    {
        location: "Sunway",
        name: "Sunway Medical Centre",
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
        time: "6:00am - 7:00pm",
        service: "Primary Care",
    },
    {
        location: "Sri Petaling",
        name: "Medilove Clinic",
        time: "6:00am - 8:00pm",
        service: "Vaccine Service",
    },
];

export function TableDemo() {
    const [selectedLocation, setSelectedLocation] = useState<any>(null);
    const [appointmentConfirmed, setAppointmentConfirmed] = useState<boolean>(false);

    const handleBookAppointment = (location: any) => {
        // Handle the booking logic here
        setSelectedLocation(location);
        setAppointmentConfirmed(false); // Reset confirmation status when a new location is selected
    };

    const handleConfirmAppointment = () => {
        // Logic to confirm the appointment
        // For example, you could call an API here

        // Mock confirmation logic
        setAppointmentConfirmed(true);
        setSelectedLocation(null); // Clear selected location after confirmation
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
                        <TableHead className="text-right">Action</TableHead>
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
                                <Button onClick={() => handleBookAppointment(location)}>
                                    Book Appointment
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right"></TableCell>
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
                        <p><strong>Clinic Name:</strong> {selectedLocation.name}</p>
                        <p><strong>Service:</strong> {selectedLocation.service}</p>
                        <p><strong>Opening Hours:</strong> {selectedLocation.time}</p>
                    </CardContent>
                    <CardFooter className="mt-4">
                        <Button variant="outline" onClick={() => setSelectedLocation(null)}>
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmAppointment}>
                            Confirm Appointment
                        </Button>
                    </CardFooter>
                </Card>
            )}
            {appointmentConfirmed && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
                    <p>Appointment has been confirmed!</p>
                </div>
            )}
        </div>
    );
}
