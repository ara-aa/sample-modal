import { Dialog } from '@/components/Dialog'
import { useOpener } from '@/hooks/opener'
import { useCallback } from 'react'

export const ModalComponent = (): React.ReactNode => {
  const callback = useCallback((v: boolean) => {
    console.log(v)
  }, [])

  const [open, opener] = useOpener(callback)

  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      <Dialog children={<></>} opener={opener} />
    </div>
  )
}
