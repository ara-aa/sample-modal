import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

export const InputCheckbox = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
      <FormControlLabel required control={<Checkbox />} label='Required' />
    </FormGroup>
  )
}
