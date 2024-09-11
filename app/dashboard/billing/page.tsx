import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Billing } from '@/components/tables/billing-tables/billing-table';
import { billing } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Billing', link: '/dashboard/billing' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <Billing data={billing} />
      </div>
    </PageContainer>
  );
}
