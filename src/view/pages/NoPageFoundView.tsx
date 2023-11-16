import { BasePageLayout } from '@/view/layout/BasePageLayouts/BasePageLayout.tsx';

export const NoPageFoundView = () => {
  document.title = "No Page Found | Dwelar";

  return (
    <BasePageLayout>
      <h2>Page Not Found</h2>
    </BasePageLayout>
  );
};
