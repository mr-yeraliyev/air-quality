import { Box, TextField, Typography } from '@mui/material'
import { AirQualityCustomButton, AuthCard } from '../components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <AuthCard title="Login">
      <TextField
        id="filled-basic"
        label="Username"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Password"
        variant="filled"
        size="small"
      />
      <Typography variant="caption" sx={{ color: '#65a6cb' }}>
        <Link to="/auth/forgot-password">Forgot Password ?</Link>
      </Typography>
      <AirQualityCustomButton variant="contained">Login</AirQualityCustomButton>
      <Box
        component="span"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'lighter' }}>
          Not a member ?
        </Typography>
        <Typography variant="caption" sx={{ color: '#65a6cb' }}>
          <Link to="/auth/sign-up">Sign up</Link>
        </Typography>
      </Box>
    </AuthCard>
  )
}

export default Login
