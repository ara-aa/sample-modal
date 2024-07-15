import { useState } from 'react'
import { useKeydown } from '@/hooks/useKeydown'
import { InputCheckbox, InputRadio, InputSelect, Dialog } from '@/components'
import { Grid, Button, TextField } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'

export const ModalComponent = (): React.ReactNode => {
  const [age, setAge] = useState<string>('')
  const { dialogRef, handleShowModal, handleCloseModal } = useKeydown()

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <InputCheckbox />
        </Grid>
        <Grid xs={12} item>
          <InputRadio />
        </Grid>
        <Grid xs={12} item>
          <InputSelect
            value={age}
            handleChangeSelect={(event: SelectChangeEvent) => {
              setAge(event.target.value)
            }}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        </Grid>
        <Grid xs={12} item>
          <Button type='button' variant='outlined' onClick={handleShowModal}>
            Open Dialog
          </Button>
        </Grid>
      </Grid>
      <Dialog handleCloseModal={handleCloseModal} dialogRef={dialogRef}>
        モーダルが開いている際、背景をタブ移動できない。
      </Dialog>
    </>
  )
}
