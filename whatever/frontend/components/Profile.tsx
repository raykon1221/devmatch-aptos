import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { AccountInfo } from '@/components/AcoountInfo'; // Importing AccountInfo
import { WalletDetails } from '@/components/WalletDetails'; // Importing WalletDetails
import { NetworkInfo } from '@/components/NetworkInfo'; // Importing NetworkInfo

export function Profile() {
  const [profileData] = useState({
    name: 'Matthew',
    email: 'mat12345@example.com',
    phone: '123-456-7890',
  });

  const [dialogOpen, setDialogOpen] = useState<string | null>(null);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h4 className="text-xl font-semibold text-gray-800">Profile</h4>
      </div>
      {/* Profile Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card shadow="md">
          <CardHeader>
            <CardTitle>
              <Label className="text-lg font-semibold">Name</Label>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">{profileData.name}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDialogOpen('name')}>Edit Name</DropdownMenuItem>
                <DropdownMenuItem>Delete Name</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Refresh</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={dialogOpen === 'name'} onOpenChange={() => setDialogOpen(null)}>
              <DialogTrigger asChild>
                <Button variant="default" className="hidden">Trigger</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <Label className="text-lg font-semibold">Edit Name</Label>
                  </DialogTitle>
                  <DialogDescription>
                    <Label className="text-sm">Update your name here.</Label>
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4">
                  <p>Form to edit name goes here...</p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card shadow="md">
          <CardHeader>
            <CardTitle>
              <Label className="text-lg font-semibold">Email</Label>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">{profileData.email}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDialogOpen('email')}>Edit Email</DropdownMenuItem>
                <DropdownMenuItem>Delete Email</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Refresh</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={dialogOpen === 'email'} onOpenChange={() => setDialogOpen(null)}>
              <DialogTrigger asChild>
                <Button variant="default" className="hidden">Trigger</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <Label className="text-lg font-semibold">Edit Email</Label>
                  </DialogTitle>
                  <DialogDescription>
                    <Label className="text-sm">Update your email address here.</Label>
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4">
                  <p>Form to edit email goes here...</p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card shadow="md">
          <CardHeader>
            <CardTitle>
              <Label className="text-lg font-semibold">Phone</Label>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">{profileData.phone}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDialogOpen('phone')}>Edit Phone</DropdownMenuItem>
                <DropdownMenuItem>Delete Phone</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Refresh</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={dialogOpen === 'phone'} onOpenChange={() => setDialogOpen(null)}>
              <DialogTrigger asChild>
                <Button variant="default" className="hidden">Trigger</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <Label className="text-lg font-semibold">Edit Phone</Label>
                  </DialogTitle>
                  <DialogDescription>
                    <Label className="text-sm">Update your phone number here.</Label>
                  </DialogDescription>
                </DialogHeader>
                <div className="p-4">
                  <p>Form to edit phone number goes here...</p>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional Info */}
      <div className="mt-8">
        <AccountInfo />
        <WalletDetails />
        <NetworkInfo />
      </div>
    </div>
  );
}



