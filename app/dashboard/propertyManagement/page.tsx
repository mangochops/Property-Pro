'use client';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import PropertyModal from '@/components/modal/propertyModal';
import { useState, useEffect } from 'react';

interface Property {
  id: number;
  Property_name: string;
  Property_location: string;
  Property_units: number;
}

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Property Management', link: '/dashboard/property-management' }
];

export default function Page() {
  const [properties, setProperties] = useState<Property[]>([]); // Typed as array of Property

  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties');
        const data: Property[] = await res.json(); // Ensure the API returns an array of Property objects
        setProperties(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start">
          <Heading
            title={`Properties`}
            description="Add your property details to start managing"
          />
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Add a property
            </CardTitle>
          </CardHeader>
          <PropertyModal
            onSubmitSuccess={function (newProperty: any): void {
              throw new Error('Function not implemented.');
            }}
          />
        </Card>

        {/* Render a card for each property */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card key={property.id} className="border">
              <CardHeader>
                <CardTitle>{property.Property_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Location: {property.Property_location}</p>
                <p>Units: {property.Property_units}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
