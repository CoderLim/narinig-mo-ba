import { createFileRoute } from '@tanstack/react-router';

import { staticPageRouteOptions } from './-static-page';

export const Route = createFileRoute('/(pages)/how-to-play-narinig-mo-ba')(
  staticPageRouteOptions('how-to-play-narinig-mo-ba')
);
