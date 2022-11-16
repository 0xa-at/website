import { Box, Typography, useMediaQuery } from '@mui/material';
import EventsPanel from '../components/EventsPanel';
import { getPastEvents, getUpcomingEvents } from '../utils/api';
import { EventType } from '../utils/types';

type Props = {
  upcomingEvents: EventType[];
  pastEvents: EventType[];
}

export async function getStaticProps() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  return {
    props: {
      upcomingEvents,
      pastEvents
    },
  }
}

export default function HomePage(props: Props) {
  const isMobile = useMediaQuery('(max-width:600px)');

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

      <Box pt={10} pb={5}>
        {/* Upcoming events */}
        <Typography variant="h2" pb={2} sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '2em' }}>
          Upcoming Events
        </Typography>

        <EventsPanel events={props.upcomingEvents} />

        {/* Past events */}
        <Typography variant="h2" pb={2} sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '2em' }}>
          Past Events
        </Typography>

        <EventsPanel events={props.pastEvents} />
      </Box>
    </Box>
  )
}