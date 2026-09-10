import { createFileRoute } from '@tanstack/react-router';

import { staticPageRouteOptions } from './-static-page';

export const Route = createFileRoute('/(pages)/narinig-mo-ba-story')(
  staticPageRouteOptions('narinig-mo-ba-story')
);
