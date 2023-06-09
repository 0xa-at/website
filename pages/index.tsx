import { Box, Button, Paper, Typography, useMediaQuery } from '@mui/material';
import EventsPanel from '../components/EventsPanel';
import { getPastEvents, getUpcomingEvents } from '../utils/api';
import { EventType } from '../utils/types';
import ImageCarousel from '../components/ImageCarousel';

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
  const images = [
    "images/security/DSC_3366.jpg",
    "images/security/DSC_3338.jpg",
    "images/security/DSC_3266.jpg",

    "images/qc/DSC_2731.jpg",
    "images/qc/DSC_2875.jpg",
    "images/qc/DSC_2759.jpg",
    "images/qc/DSC_2819.jpg",
  ];

  return (
    <Box>
      <Box pt={3}>
        <ImageCarousel images={images} />
      </Box>

      <Box mt={-5} pt={0} pb={5}>
        {/* Upcoming events */}
        <Typography variant="h2" pb={2} sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '2em' }}>
          Upcoming Events
        </Typography>

        {props.upcomingEvents.length > 0 ?
          <EventsPanel events={props.upcomingEvents} />
          : <Typography variant="body1" mt={1}>
            To be announced
          </Typography>
        }

        {/* Past events */}
        <Typography variant="h2" pb={2} sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '2em' }}>
          Past Events
        </Typography>

        <EventsPanel events={props.pastEvents} />
      </Box>
    </Box>
  )
}