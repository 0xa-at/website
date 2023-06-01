import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { EventType } from "../utils/types";

type Props = {
    event: EventType
}

export default function EventSidebar({ event }: Props) {
    return (
        <Box width={250}>
            <Paper variant="outlined" >
                <Box p={2}>
                    {/* Date and time */}
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        Date & Time
                    </Typography>
                    <Typography variant="body1" >
                        {event.date}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    {/* Location */}
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                        Location
                    </Typography>
                    <Typography variant="body1" >
                        {event.location}
                    </Typography>

                    {/* Livestream */}
                    {event.livestream_link &&
                        <>
                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                Livestream
                            </Typography>
                            <Typography variant="body1">
                                <Link href={event.livestream_link} color="inherit">
                                    Watch here
                                </Link>
                            </Typography>
                        </>
                    }

                    {/* Link */}
                    {event.register_link &&
                        <>
                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                                Link
                            </Typography>
                            <Typography variant="body1">
                                <Link href={event.register_link} color="inherit">
                                    Sign Up
                                </Link>
                            </Typography>
                        </>
                    }
                </Box>
            </Paper>
        </Box>
    )
}