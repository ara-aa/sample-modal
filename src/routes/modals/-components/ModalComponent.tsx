import { Dialog } from '@/components/Dialog'
import { useKeydown } from '@/hooks/useKeydown'

export const ModalComponent = (): React.ReactNode => {
  const { dialogRef, handleShowModal, handleCloseModal } = useKeydown()

  return (
    <div>
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <button type='button' onClick={handleShowModal}>
        Open Dialog
      </button>
      <Dialog handleCloseModal={handleCloseModal} dialogRef={dialogRef}>
        モーダルの動作テスト
      </Dialog>
    </div>
  )
}
