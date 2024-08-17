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
              <Input id="name" placeholder="Name of your location" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="service">Services</Label>
              <Select>
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
        <Button variant="outline">Cancel</Button>
        <Button>Find</Button>
      </CardFooter>
    </Card>
  )
}
