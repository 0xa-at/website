import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { EventType } from "../utils/types";
import EventListPreview from "../components/EventListPreview";
import { getPastEvents } from "../utils/api";

type Props = {
    allEvents: EventType[]
}

export default function EventsPage({ allEvents }: Props) {
    return (
        <Box>
            <PageHeader title="Events" />

            {allEvents.map((event) => (
                <EventListPreview key={event.id} event={event} />
            ))}
        </Box>
    )
}

export const getStaticProps = async () => {
    const allEvents = getPastEvents()

    return {
        props: { allEvents },
    }
}