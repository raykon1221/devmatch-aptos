import { useState, useEffect } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import { Input } from './ui/input';

export function Home() {
  const { account } = useWallet();
  const [dialogOpen, setDialogOpen] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user-specific data or perform initial data loading here
  }, [account]);

  return (
    <div className="flex flex-col gap-6 p-4 bg-white shadow-md rounded-lg">
      <h4 className="text-xl font-semibold text-gray-800">Welcome to Your Healthcare Portal</h4>
      <p className="text-gray-600">
        Manage your health records and personal information securely and conveniently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card shadow="md">
          <CardHeader>
            <CardTitle>
              <Label className="text-lg font-semibold">Medical Records</Label>
            </CardTitle>
            <CardDescription>
              <Label className="text-sm text-gray-600">View and manage your medical records.</Label>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDialogOpen('records')}>View Records</DropdownMenuItem>
                <DropdownMenuItem>Export Records</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Refresh</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={dialogOpen === 'records'} onOpenChange={() => setDialogOpen(null)}>
              <DialogTrigger asChild>
                <Button variant="default" className="hidden">Trigger</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <Label className="text-lg font-semibold">Medical Records</Label>
                  </DialogTitle>
                  <DialogDescription>
                    <Label className="text-sm">Here you can view and manage your medical records.</Label>
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <p>RecordID: RDV00184934</p>
                  <p>Patient Address: 0xK902e0352240477d081806df8baa85a7d85ee9119aaa03423c8760267342</p>
                  <p>Provider Address: 0x8kys64e0352240477d081806df8baa85a7d85ee9119aaa03423c876025d09862</p>
                  <p>Prescription: </p>
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
              <Label className="text-lg font-semibold">Edit Profile</Label>
            </CardTitle>
            <CardDescription>
              <Label className="text-sm text-gray-600">Update your personal details and preferences.</Label>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setDialogOpen('profile')}>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem>Change Password</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={dialogOpen === 'profile'} onOpenChange={() => setDialogOpen(null)}>
              <DialogTrigger asChild>
                <Button variant="default" className="hidden">Trigger</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
            </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
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
    </div>
  );
}
