import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  value: string
  handleChangeSelect: (event: SelectChangeEvent) => void
}

export const InputSelect = (props: Props) => {
  const { value, handleChangeSelect } = props

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-helper-label'>Age</InputLabel>
      <Select
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        value={value}
        label='Age'
        onChange={e => handleChangeSelect(e)}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value='10'>Ten</MenuItem>
        <MenuItem value='20'>Twenty</MenuItem>
        <MenuItem value='30'>Thirty</MenuItem>
      </Select>
      <FormHelperText>With label + helper text</FormHelperText>
    </FormControl>
  )
}
