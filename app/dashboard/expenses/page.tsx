import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Expense } from '@/components/tables/expenses-tables/expenses-table';
import { expenses } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Expenses', link: '/dashboard/expenses' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <Expense data={expenses} />
      </div>
    </PageContainer>
  );
}
