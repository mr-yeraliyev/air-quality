import { Button, ButtonProps } from '@mui/material'
import { purple } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#0391be',
  '&:hover': {
    backgroundColor: '#0391bf',
  },
  borderRadius: 20,
  textTransform: 'none',
}))

export default ColorButton
