import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';

import { Tenant } from '@/components/tables/tenants-tables/tenants-table';
import { tenants } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Tenants', link: '/dashboard/tenant' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <Tenant data={tenants} />
      </div>
    </PageContainer>
  );
}
