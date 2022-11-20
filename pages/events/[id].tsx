import { Box, Typography, useMediaQuery } from "@mui/material";
import EventSidebar from "../../components/EventSidebar";
import { getAllEvents, getEventById } from "../../utils/api";
import { EventType } from "../../utils/types";

type Props = {
    event: EventType,
}

export default function AuthorPage({ event }: Props) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box >
            <Box pt={4}>
                <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                    {event.title}
                </Typography>
                <Typography variant="body1" >
                    <b>{event.date}</b> at <b>{event.location}</b>
                </Typography>
            </Box>

            <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} mt={4}>
                <Box flex={1} mr={isMobile ? 0 : 4}>
                    <Typography variant="body1" >
                        {event.description}
                    </Typography>
                </Box>

                <EventSidebar event={event} />
            </Box>

        </Box >
    )
}

type Params = {
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: Params) {
    const event = getEventById(params.id)
    return {
        props: {
            event,
        },
    }
}

export async function getStaticPaths() {
    const events = getAllEvents();
    return {
        paths: events.map((event) => {
            return {
                params: {
                    id: event.id,
                },
            }
        }),
        fallback: false,
    }
}