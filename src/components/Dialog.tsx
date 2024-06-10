import type { Opener } from '@/hooks/opener'
import { useCallback, useEffect, useRef } from 'react'
import { modalFocus } from '@/functions/ModalFocus'

export const Dialog = ({
  children,
  opener,
}: { children: React.ReactNode; opener: Opener<boolean> }) => {
  const dialogRef = useRef<HTMLDialogElement>(null!)
  const { close, isOpen, callback } = opener

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', e =>
        modalFocus(e, dialogRef.current, close),
      )
      dialogRef.current?.showModal()
    }
    return () => {
      document.removeEventListener('keydown', e =>
        modalFocus(e, dialogRef.current, close),
      )
      close()
    }
  }, [isOpen, close])

  const ok = useCallback(() => {
    callback(false, true)
    close()
    dialogRef.current?.close()
  }, [callback, close])

  const ng = useCallback(() => {
    callback(false, false)
    document.removeEventListener('keydown', e =>
      modalFocus(e, dialogRef.current, close),
    )
    close()
    dialogRef.current?.close()
  }, [callback, close])

  const dialogElement = (
    <dialog ref={dialogRef}>
      {children}
      <button type='button' onClick={ng}>
        NG
      </button>
      <button type='button' onClick={ok}>
        OK
      </button>
    </dialog>
  )

  return dialogElement
}
