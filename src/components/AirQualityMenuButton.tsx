import { Button, ButtonProps, styled } from '@mui/material'

const MenuButton = styled(Button)<ButtonProps>(() => ({
  color: '#515151',
  backgroundColor: '#d9d9d9',
  '&:hover': {
    backgroundColor: '#d9d9d1',
  },
  borderRadius: 20,
  textTransform: 'none',
  width: 69,
  height: 22,
}))

export default MenuButton
