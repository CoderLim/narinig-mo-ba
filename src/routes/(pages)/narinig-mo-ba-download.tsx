import { createFileRoute } from '@tanstack/react-router';

import { staticPageRouteOptions } from './-static-page';

export const Route = createFileRoute('/(pages)/narinig-mo-ba-download')(
  staticPageRouteOptions('narinig-mo-ba-download')
);
