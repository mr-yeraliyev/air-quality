import { Box, Typography } from '@mui/material'

const FaqPage = () => {
  return (
    <Box
      sx={{
        marginY: 5,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'start',
      }}
    >
      <div style={{ width: 500, color: '#ffff' }}>
        <Typography sx={{ marginBottom: 1 }} variant="h6">
          What are IoT air quality sensors?
        </Typography>
        <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
          IoT air quality sensors are devices that are used to monitor air
          pollution levels in real time. They are usually installed in various
          areas of the city and collect data on the content of harmful
          substances in the atmosphere, such as nitrogen oxides, carbon dioxide,
          small particles and others.
        </Typography>
        <Typography sx={{ marginBottom: 1 }} variant="h6">
          What are the benefits of air quality data visualization?
        </Typography>
        <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
          Visualizing air quality data allows you to visually track changes in
          air pollution levels in different parts of a city or region. This
          helps residents and organizations make informed decisions about health
          and safety.
        </Typography>
        <Typography sx={{ marginBottom: 1 }} variant="h6">
          What air quality data do you collect?
        </Typography>
        <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
          We collect data on the content of various harmful substances in the
          atmosphere, such as nitrogen dioxide (NO2), carbon oxides (CO), fine
          particles (PM2.5), ozone (O3) and others. This data provides valuable
          information about the current state of the air and its impact on
          health.
        </Typography>
        <Typography sx={{ marginBottom: 1 }} variant="h6">
          How often is the data on your site updated?
        </Typography>
        <Typography sx={{ marginBottom: 2 }} variant="subtitle1">
          We update air quality data on our website in real time. Information on
          the content of harmful substances is updated continuously as new data
          is received from our IoT sensors.
        </Typography>
      </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <img src="/Kazakhstan.png" alt="kazakhstan" width={600} />
        <img src="/Zhetisu.png" alt="Zhetisu" width={600} />
      </Box>
    </Box>
  )
}

export default FaqPage
