import { createFileRoute } from '@tanstack/react-router'
import { lazyRouteComponent } from '@tanstack/react-router'

export const Route = createFileRoute('/modals')({
  component: () => lazyRouteComponent(() => import('./route.lazy')),
})
