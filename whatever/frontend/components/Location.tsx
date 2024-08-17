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
      paymentStatus: "Paid",
      totalAmount: "8:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
      location: "Sri Petaling",
      paymentStatus: "Pending",
      totalAmount: "6:30am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Unpaid",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Paid",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Paid",
      totalAmount: "6:00am - 10:00pm",
      paymentMethod: "Primary Care",
    },
    {
        location: "Sri Petaling",
      paymentStatus: "Pending",
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
        <Table className="min-w-full max-w-[1200px]">
            <TableCaption>A list of your search results.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Nearest Location</TableHead>
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
  );
}
  