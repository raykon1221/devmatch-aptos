import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TableDemo } from "@/components/Location"; // Import your component

export function CardWithForm() {
  const [selectedService, setSelectedService] = useState("");
  const [location, setLocation] = useState("");
  const [dialogOpen, setDialogOpen] = useState<string | null>(null); // Allow strings or null

  const handleCancel = () => {
    setSelectedService("");
    setLocation("");
  };

  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Searching for nearby clinical services?</CardTitle>
          <CardDescription>We got you! Just with a few clicks.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Name of your location"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="service">Services</Label>
                <Select
                  onValueChange={(value) => setSelectedService(value)}
                  value={selectedService}
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
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={() => setDialogOpen('findResult')}>Find</Button>
        </CardFooter>
      </Card>

      <Dialog open={dialogOpen === 'findResult'} onOpenChange={() => setDialogOpen(null)}>
        <DialogTrigger asChild>
          <Button variant="default" className="hidden">Trigger</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Label className="text-lg font-semibold">Search Results</Label>
            </DialogTitle>
            <DialogDescription>
              <Label className="text-sm">Here are the results based on your search.</Label>
            </DialogDescription>
          </DialogHeader>
          <TableDemo /> {/* Render your component here */}
          <Button variant="outline" onClick={() => setDialogOpen(null)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
