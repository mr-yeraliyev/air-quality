import { Box, TextField, Typography } from '@mui/material'
import { AirQualityCustomButton, AuthCard } from '../components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <AuthCard title="Sign Up">
      <TextField
        id="filled-basic"
        label="Email"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Create Username"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Create Password"
        type="password"
        variant="filled"
        size="small"
      />
      <TextField
        id="filled-basic"
        label="Confirm Password"
        type="password"
        variant="filled"
        size="small"
      />
      <AirQualityCustomButton variant="contained">
        Create account
      </AirQualityCustomButton>
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
          Already have an account ?
        </Typography>
        <Typography variant="caption" sx={{ color: '#65a6cb' }}>
          <Link to="/auth">Login</Link>
        </Typography>
      </Box>
    </AuthCard>
  )
}

export default Login
