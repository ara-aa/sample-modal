import { Button, Box, Stack } from '@mui/material'

type Props = {
  handleCloseModal: () => void
  dialogRef: React.Ref<HTMLDialogElement>
  children: React.ReactNode
}

export const Dialog = (props: Props) => {
  const { children, handleCloseModal, dialogRef } = props

  return (
    <dialog ref={dialogRef} className='dialog'>
      <Box component='section' sx={{ margin: '2rem' }}>
        {children}
        <Stack
          direction='row'
          justifyContent='center'
          spacing={2}
          sx={{ marginTop: '2rem' }}
        >
          <Button type='button' variant='outlined' onClick={handleCloseModal}>
            Close
          </Button>
          <Button type='button' variant='outlined' onClick={handleCloseModal}>
            OK
          </Button>
        </Stack>
      </Box>
    </dialog>
  )
}
