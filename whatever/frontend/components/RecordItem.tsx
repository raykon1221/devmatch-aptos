// RecordItem.tsx
import React from 'react';

interface RecordItemProps {
  record: {
    id: string;
    title: string;
    details: string;
  };
}

export const RecordItem: React.FC<RecordItemProps> = ({ record }) => {
  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg bg-gray-100">
      <h5 className="text-lg font-semibold">{record.title}</h5>
      <p className="text-gray-600">{record.details}</p>
    </div>
  );
};

