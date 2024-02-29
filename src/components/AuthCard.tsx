import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { ReactNode } from 'react'
import { Box } from '@mui/material'

interface IAuthCardProps {
  title: string
  children: ReactNode
}

const AuthCard = ({ title, children }: IAuthCardProps) => {
  return (
    <Card
      sx={{ backgroundColor: '#f8f9fb', borderRadius: '30px', minWidth: 400 }}
    >
      <CardHeader
        sx={{ textAlign: 'center', borderBottom: '1px solid #bdbdbe' }}
        title={title}
      />

      <CardContent
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 300,
            gap: '20px',
          }}
        >
          {children}
        </Box>
      </CardContent>
    </Card>
  )
}

export default AuthCard
