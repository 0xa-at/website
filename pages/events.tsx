import { Box, Grid } from "@mui/material";
import EventPreview from "../components/EventPreview";
import PageHeader from "../components/PageHeader";

export default function EventsPage() {


    return (
        <Box>
            <PageHeader title="Events" />
            {/* 
            <Box mx={3} pt={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                {upcomingEvents.map((event) => (
                    <EventPreview title={event.title} description={event.description} image={event.image} />
                ))}
            </Box> */}


        </Box >
    );
}