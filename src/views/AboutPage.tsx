import { Box, Typography } from '@mui/material'

const AboutPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 700,
          textAlign: 'center',
          marginY: 8,
          color: '#ffffff',
        }}
      >
        <Typography sx={{ marginY: 1 }} variant="h6">
          Dear users,
        </Typography>
        <Typography sx={{ marginY: 1 }} variant="h6">
          Our project to create a website for visualizing and analyzing air
          quality data is an initiative to raise awareness of the importance of
          caring for the environment and the health of urban populations.
        </Typography>
        <Typography sx={{ marginY: 1 }} variant="h6">
          We collect air quality data using modern IoT sensors installed in
          various parts of the city. Our efforts are aimed at providing the
          public with access to this information in a convenient and
          understandable format.
        </Typography>
        <Typography sx={{ marginY: 1 }} variant="h6">
          Our team is made up of experts in web development, design and data
          analysis who work to make our site the hub for air quality information
          in your city.
        </Typography>
        <Typography sx={{ marginY: 1 }} variant="h6">
          We hope our project will help you be more aware of the environment and
          make more informed decisions to maintain your health and well-being.
        </Typography>
        <Typography sx={{ marginY: 1 }} variant="h6">
          Sincerely,
        </Typography>
        <Typography sx={{ marginY: 1 }} variant="h6">
          Air quality data visualization project team.
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutPage
