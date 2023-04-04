import { Link, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { EventType } from "../utils/types";
import EventMetadata from "./EventMetadata";

export default function EventListPreview({ event }: { event: EventType }) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box m={5} mx={isMobile ? 0 : 5}>
            <Link variant="h5" href={`/events/${event.id}`}>{event.title}</Link>
            <EventMetadata date={event.date} />
        </Box>
    )
}