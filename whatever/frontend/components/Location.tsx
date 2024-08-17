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
    return (
      <Table>
        <TableCaption>A list of your search result.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nearest Location</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Services</TableHead>
            <TableHead className="text-right">Opening Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locations.map((location) => (
            <TableRow key={location.location}>
              <TableCell className="font-medium">{location.location}</TableCell>
              <TableCell>{location.paymentStatus}</TableCell>
              <TableCell>{location.paymentMethod}</TableCell>
              <TableCell className="text-right">{location.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">Book Appointment</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  