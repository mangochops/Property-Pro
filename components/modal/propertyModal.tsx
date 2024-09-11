'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { useState } from 'react';

interface PropertyModalProps {
  onSubmitSuccess: (newProperty: any) => void; // You can replace 'any' with the actual type of the property
}

export default function PropertyModal({ onSubmitSuccess }: PropertyModalProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const propertyData = Object.fromEntries(formData);

    try {
      setLoading(true);
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propertyData)
      });

      if (!res.ok) {
        throw new Error('Failed to create property');
      }

      const newProperty = await res.json();
      onSubmitSuccess(newProperty); // Call the success callback with the new property
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          ＋ Add New Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>Provide your property details</DialogDescription>
        </DialogHeader>
        <form
          id="property-form"
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-2">
            <p className="col-span-4">Property name</p>
            <Input
              id="property_name"
              name="Property_name"
              placeholder="Your property name."
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <p className="col-span-4">Property location</p>
            <Input
              id="property_location"
              name="Property_location"
              placeholder="Where is the property located."
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-2">
            <p className="col-span-4">Property units</p>
            <Input
              id="property_units"
              name="Property_units"
              placeholder="Number of units in property."
              className="col-span-4"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              type="submit"
              size="lg"
              form="property-form"
              className="justify-center"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Property'}
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
