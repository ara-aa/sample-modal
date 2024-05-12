import { createLazyFileRoute } from '@tanstack/react-router'
import { ModalComponent } from './-components/ModalComponent'

export const Route = createLazyFileRoute('/modals')({
  component: () => <ModalComponent />,
})
