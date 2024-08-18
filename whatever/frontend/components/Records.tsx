import React, { useState } from 'react';
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

// Define the type for the records state
interface Record {
  id: string;
  title: string;
  details: string;
}

const staticRecords: Record[] = [
  { id: 'RDR073742', title: 'Record Title 1', details: 'Medilove Clinic' },
  { id: 'RDR073743', title: 'Record Title 2', details: 'Medilove Clinic' },
  { id: 'RDR073744', title: 'Record Title 3', details: 'Medilove Clinic' },
];

export const Records: React.FC = () => {
  const [records, setRecords] = useState<Record[]>(staticRecords);
  const [selectedRecord, setSelectedRecord] = useState<Record | null>(null);

  const handleEdit = (record: Record) => {
    // Handle edit record logic
    console.log('Edit record:', record);
  };

  const handleDelete = (record: Record) => {
    // Handle delete record logic
    console.log('Delete record:', record);
  };

  return (
    <div className="flex flex-col gap-6 p-4 bg-white shadow-md rounded-lg">
      <h4 className="text-xl font-semibold text-gray-800">Medical Records</h4>
      {records.length > 0 ? (
        <div className="grid gap-4">
          {records.map((record) => (
            <Card shadow="md" key={record.id}>
              <CardHeader>
                <CardTitle>
                  <Label className="text-lg font-semibold">Title:</Label> {record.title}
                </CardTitle>
                <CardDescription>
                  <Label className="text-sm">Details:</Label> {record.details}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="default">Options</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSelectedRecord(record)}>
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEdit(record)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(record)}>
                        Delete
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Refresh</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Dialog open={!!selectedRecord} onOpenChange={() => setSelectedRecord(null)}>
                    <DialogTrigger asChild>
                      <Button variant="default" className="hidden">Trigger</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <Label className="text-lg font-semibold">Title:</Label> {selectedRecord?.title}
                        </DialogTitle>
                        <DialogDescription>
                          <Label className="text-sm">Details:</Label> {selectedRecord?.details}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="p-4">
                        {selectedRecord && (
                          <div>
                            <p><Label className="font-medium">ID:</Label> {selectedRecord.id}</p>
                            <p><Label className="font-medium">Details:</Label> {selectedRecord.details}</p>
                            {/* Add any additional details or editing options */}
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No records available.</p>
      )}
    </div>
  );
};
