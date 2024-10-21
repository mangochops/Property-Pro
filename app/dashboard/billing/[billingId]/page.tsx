import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { UserClient } from '@/components/tables/user-tables/client';
import { billing } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Billing', link: '/dashboard/billing' }
];
export interface Billing {
  id: string;
  name: string;
  // Add other relevant properties of the billing model
}

export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <UserClient data={billing} />
      </div>
    </PageContainer>
  );
}
