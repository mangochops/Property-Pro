import { Breadcrumbs } from '@/components/breadcrumbs';
import { CreateProfile } from '@/components/forms/user-profile-stepper/create-profile';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Profile', link: '/dashboard/profile' }
];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <CreateProfile categories={[]} initialData={null} />
      </div>
    </PageContainer>
  );
}
