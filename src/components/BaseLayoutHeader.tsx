import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuButton from './AirQualityMenuButton'
import { Link, useNavigate } from 'react-router-dom'

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const handleOpenUserMenu = () => {
    navigate('/profile')
  }

  return (
    <AppBar sx={{ backgroundColor: '#265873' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img
              src="/air-quality-logo.png"
              alt="logo"
              style={{ height: 50 }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <MenuButton sx={{ boxShadow: 3 }} variant="contained">
                  <Link to={'/faq'}>FAQ's</Link>
                </MenuButton>
                <MenuButton sx={{ boxShadow: 3 }} variant="contained">
                  <Link to={'/about'}>About</Link>
                </MenuButton>
              </Box>

              <Tooltip title="Open settings">
                <Box
                  sx={{ display: 'flex', gap: 1, alignItems: 'center' }}
                  onClick={handleOpenUserMenu}
                >
                  <Typography sx={{ cursor: 'pointer' }} variant="subtitle1">
                    FREEDOMD1VE
                  </Typography>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" />
                  </IconButton>
                </Box>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
