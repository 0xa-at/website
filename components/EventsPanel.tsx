import { Grid } from "@mui/material";
import EventPreview from "./EventPreview";

type Props = {
    events: any[];
}

export default function EventsPanel(props: Props) {
    return (
        <Grid container spacing={2}>
            {props.events.map((event) => (
                <Grid item xs={12} sm={6} md={4} >
                    <EventPreview title={event.title} description={event.description} image={event.image} />
                </Grid>
            ))}
        </Grid>
    )
}