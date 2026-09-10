import { createFileRoute } from '@tanstack/react-router';

import { staticPageRouteOptions } from './-static-page';

export const Route = createFileRoute('/(pages)/narinig-mo-ba-mobile')(
  staticPageRouteOptions('narinig-mo-ba-mobile')
);
