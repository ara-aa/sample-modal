type Props = {
  handleCloseModal: () => void
  dialogRef: React.Ref<HTMLDialogElement>
  children: React.ReactNode
}

export const Dialog = ({ children, handleCloseModal, dialogRef }: Props) => {
  return (
    <dialog ref={dialogRef}>
      {children}
      <button type='button' onClick={handleCloseModal}>
        Close
      </button>
      <button type='button' onClick={handleCloseModal}>
        OK
      </button>
    </dialog>
  )
}
