import { Box, Card, CardContent } from '@mui/material'
import { AirQualityCustomButton } from '../components'

const ProfilePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Card
        sx={{ backgroundColor: '#f8f9fb', borderRadius: '30px', minWidth: 400 }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 350,
              gap: 8,
            }}
          >
            <img width={114} src="/User.png" alt="user-icon" />
            <span>FREEDOMD1VE</span>
            <span>YOUR EMAIL ADDRESS</span>
            <span>YOUR NUMBER(OPTIONAL)</span>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginBottom: 2,
              }}
            >
              <AirQualityCustomButton sx={{ width: 150 }}>
                Change password
              </AirQualityCustomButton>
              <AirQualityCustomButton sx={{ width: 150 }}>
                Quit
              </AirQualityCustomButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ProfilePage
