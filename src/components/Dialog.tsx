import type { Opener } from '@/hooks/opener'
import { useCallback, useEffect, useRef } from 'react'

export const Dialog = ({
  children,
  opener,
}: { children: React.ReactNode; opener: Opener<boolean> }) => {
  const dialog = useRef<HTMLDialogElement>(null)
  const { close, isOpen, callback } = opener

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal()
    }
    return () => {
      close()
    }
  }, [isOpen])

  const ok = useCallback(() => {
    callback(false, true)
    close()
    dialog.current?.close()
  }, [])

  const ng = useCallback(() => {
    callback(false, false)
    close()
    dialog.current?.close()
  }, [])

  return (
    <dialog ref={dialog}>
      {children}
      <button onClick={ng}>NG</button>
      <button onClick={ok}>OK</button>
    </dialog>
  )
}
