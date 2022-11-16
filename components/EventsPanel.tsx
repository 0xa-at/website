import { Grid } from "@mui/material";
import { EventType } from "../utils/types";
import EventPreview from "./EventPreview";

type Props = {
    events: EventType[];
}

export default function EventsPanel(props: Props) {
    return (
        <Grid container spacing={2}>
            {props.events.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.id}>
                    <EventPreview title={event.title} description={event.date} image={event.image} link={event.link} />
                </Grid>
            ))}
        </Grid>
    )
}