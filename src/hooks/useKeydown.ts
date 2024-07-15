import { useRef, useEffect } from 'react'
import { modalFocus } from '@/functions/ModalFocus'

export const useKeydown = () => {
  const dialogRef = useRef<HTMLDialogElement>(null!)

  const handleShowModal = () => {
    const dialog = dialogRef.current
    dialog.showModal()
    dialog.addEventListener('keydown', e =>
      modalFocus(e, dialog, handleCloseModal),
    )
    dialog.addEventListener('close', handleCloseModal)
  }

  const handleCloseModal = () => {
    const dialog = dialogRef.current
    dialog.close()
    dialog.removeEventListener('keydown', e =>
      modalFocus(e, dialog, dialog.close),
    )

    dialog.removeEventListener('close', handleCloseModal)
  }

  useEffect(() => {
    const dialog = dialogRef.current

    if (dialog.open) {
      handleShowModal()
    }

    return () => {
      handleCloseModal()
    }
  }, [handleShowModal, handleCloseModal])

  return { dialogRef, handleShowModal, handleCloseModal }
}
