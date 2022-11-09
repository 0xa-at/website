import { Box, Typography, useMediaQuery } from '@mui/material';
import EventsPanel from '../components/EventsPanel';

export default function HomePage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  const upcomingEvents = [
    {
      title: "Discovering Artificial Intelligence",
      description: "22-11-2022 18:00",
      image: "https://images.unsplash.com/photo-1497354861845-d381fb7c91a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "0xAthena - Tech Workshop Day",
      description: "mid January 2023",
      image: "https://source.unsplash.com/random/500x100"
    },
    {
      title: "Discovering Quantum Computing",
      description: "March 2023",
      image: "https://source.unsplash.com/random/500x100"
    },
  ];

  const pastEvents = [
    {
      title: "Introduction to Rust",
      description: "22-11-2021 18:00",
      image: "https://source.unsplash.com/random/500x100"
    },
    {
      title: "Introduction to C#",
      description: "mid January 2022",
      image: "https://source.unsplash.com/random/500x100"
    },
  ];

  return (
    <Box>
      <Box pt={6} sx={{
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

      <Box pt={10}>
        {/* Upcoming events */}
        <Typography variant="h2" pb={2} sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '2em' }}>
          Upcoming Events
        </Typography>

        <EventsPanel events={upcomingEvents} />

        {/* Past events */}
        <Typography variant="h2" pb={2} sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '2em' }}>
          Past Events
        </Typography>

        <EventsPanel events={pastEvents} />
      </Box>
    </Box>
  )
}