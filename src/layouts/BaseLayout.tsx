import { Outlet } from 'react-router-dom'
import { BaseLayoutHeader, BaseLayoutPagesMenu } from '../components'
import { useEffect } from 'react'
import { Box } from '@mui/material'

const BaseLayout = () => {
  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to bottom, #56779d, #D9D9D9)'
  }, [])
  return (
    <>
      <BaseLayoutHeader />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <BaseLayoutPagesMenu />
      </Box>
      <Outlet />
    </>
  )
}

export default BaseLayout
