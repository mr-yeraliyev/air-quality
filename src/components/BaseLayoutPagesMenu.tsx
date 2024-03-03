import { Box } from '@mui/material'
import MenuButton from './AirQualityMenuButton'
import { Pages, rootStore } from '../stores'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'

const BaseLayoutPagesMenu = observer(() => {
  const {
    mainPageStore: { setMainPageTitle },
  } = rootStore
  const navigate = useNavigate()
  const handleMenuItemClick = (title: string) => {
    navigate('/')
    setMainPageTitle(title)
  }
  return (
    <Box
      sx={{
        background: '#d9d9d9',
        paddingX: 2,
        paddingY: 1.5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <MenuButton
        sx={{ boxShadow: 3 }}
        variant="contained"
        onClick={() => handleMenuItemClick(Pages.recent)}
      >
        {Pages.recent}
      </MenuButton>
      <MenuButton
        sx={{ boxShadow: 3 }}
        variant="contained"
        onClick={() => handleMenuItemClick(Pages.daily)}
      >
        {Pages.daily}
      </MenuButton>
      <MenuButton
        sx={{ boxShadow: 3 }}
        variant="contained"
        onClick={() => handleMenuItemClick(Pages.weekly)}
      >
        {Pages.weekly}
      </MenuButton>
      <MenuButton
        sx={{ boxShadow: 3 }}
        variant="contained"
        onClick={() => handleMenuItemClick(Pages.monthly)}
      >
        {Pages.monthly}
      </MenuButton>
      <MenuButton
        sx={{ boxShadow: 3 }}
        variant="contained"
        onClick={() => handleMenuItemClick(Pages.yearly)}
      >
        {Pages.yearly}
      </MenuButton>
    </Box>
  )
})

export default BaseLayoutPagesMenu
