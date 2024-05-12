import { useCallback, useState } from 'react'

export function useOpener<T>(callback?: (v: T, isOpen: boolean) => void): [
  () => void,
  {
    isOpen: boolean
    close: () => void
    callback: (isOpen: boolean, v: T) => void
  },
] {
  const [isOpen, setIsOpen] = useState(false)

  const cb = useCallback(
    (isOpen: boolean, v: T) => {
      if (callback) {
        callback(v, isOpen)
      }
    },
    [callback],
  )

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  return [open, { isOpen, close, callback: cb }]
}

export type Opener<T> = ReturnType<typeof useOpener<T>>[1]
