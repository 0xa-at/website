import { Box, Typography, useMediaQuery } from '@mui/material'

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%'
    }}>
      <Typography variant="h1" sx={{
        fontSize: isMobile ? '40vw' : '15rem',
        fontWeight: 'bold',
      }}>
        0xA
      </Typography>

      <Typography variant="h3" sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '-1em' }}>
        Science Association
      </Typography>
    </Box>
  )
}