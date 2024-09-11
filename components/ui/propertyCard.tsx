'use client';
import { useState } from 'react';
import Modal from '@/components/modal/propertyModal'; // Ensure this path is correct
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './card';

export default function PropertyCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gap-4">
      <div className="mb-4 flex justify-between">
        <h2 className="py-2 text-lg font-medium  text-white">
          Your properties
        </h2>
        <button
          onClick={openModal}
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Create Property
        </button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            {/* Property details form goes here */}
            <h3 className="font-medium text-black">Create Property</h3>
            <button
              onClick={closeModal}
              className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
            >
              Create
            </button>
          </Modal>
        )}
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-bold">
            Evergreen Apartments
          </CardTitle>
        </CardHeader>
        <CardDescription>Limuru,Kiambu</CardDescription>
        <CardContent>
          <div className="text-2xl font-medium">12 Units</div>
          <p className="text-xs text-muted-foreground">1 Bedroom</p>
        </CardContent>
      </Card>
    </div>
  );
}
