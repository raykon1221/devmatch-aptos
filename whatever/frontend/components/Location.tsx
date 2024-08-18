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
  
  const locations = [
    {
      location: "Taman Bukit Jalil",
      paymentStatus: "Medilove Clinic",
      totalAmount: "8:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
      location: "Sri Petaling",
      paymentStatus: "Medilove Clinic",
      totalAmount: "6:30am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Medilove Clinic",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Medilove Clinic",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Medilove Clinic",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Medilove Clinic",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
  ]
  
  export function TableDemo() {
    const handleBookAppointment = (location: string) => {
        // Handle the booking logic here
        console.log("Booking appointment for:", location);
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
                    <TableCell>{location.paymentStatus}</TableCell>
                    <TableCell>{location.paymentMethod}</TableCell>
                    <TableCell>{location.totalAmount}</TableCell>
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
      </div>
  );
}
  