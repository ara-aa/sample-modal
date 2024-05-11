import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/modal1')({
  component: () => <div>Hello /modal1!</div>
})
