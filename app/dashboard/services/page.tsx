import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Home,
  Users,
  DollarSign,
  Wrench,
  FileText,
  TrendingUp,
  File,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Services', link: '/dashboard/services' }
];

export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="flex flex-col p-4">
          <Home className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Property Listing</CardTitle>
          <CardDescription>
            List your property on top platforms to attract potential tenants.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <Users className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Tenant Screening</CardTitle>
          <CardDescription>
            Ensure you have reliable tenants with our comprehensive screening
            process.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <DollarSign className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Rent Collection</CardTitle>
          <CardDescription>
            Automate rent collection and get detailed accounting reports.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <Wrench className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Property Maintenance</CardTitle>
          <CardDescription>
            Schedule and manage repairs with our trusted service providers.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <FileText className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Legal Services</CardTitle>
          <CardDescription>
            Get assistance with lease agreements, evictions, and other legal
            matters.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <TrendingUp className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Property Valuation</CardTitle>
          <CardDescription>
            Get accurate property valuation to determine the market value of
            your property.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <File className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Tax Filing</CardTitle>
          <CardDescription>
            Simplify your tax filing with our expert guidance and support.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <Shield className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Property Insurance</CardTitle>
          <CardDescription>
            Protect your investment with comprehensive property insurance
            coverage.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <Zap className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Utility Management</CardTitle>
          <CardDescription>
            Manage utility payments and ensure uninterrupted services for your
            tenants.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>

        <Card className="flex flex-col p-4">
          <CheckCircle className="mb-2 h-6 w-6 text-primary" />
          <CardTitle>Dispute Resolution</CardTitle>
          <CardDescription>
            Resolve tenant disputes efficiently with our professional mediation
            services.
          </CardDescription>
          <Button variant="default" className="mt-auto">
            Get Service
          </Button>
        </Card>
      </div>
    </PageContainer>
  );
}
