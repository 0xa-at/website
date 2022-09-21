import { Box, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%'
    }}>
      <Typography variant="h1" sx={{
        fontSize: '15rem',
        fontWeight: 'bold',
      }}>
        0xA
      </Typography>

      <Typography variant="h3" sx={{ fontWeight: 'bold', mt: '-3rem' }}>
        Science Association
      </Typography>
    </Box>
  )
}