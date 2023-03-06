import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
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
                    <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                        {event.description}
                    </Typography>
                </Box>

                <EventSidebar event={event} />
            </Box>

            <Box>
                {/* Schedule */}
                {event.schedule && event.schedule.length > 0 && (
                    <Box mt={4}>
                        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                            Schedule
                        </Typography>

                        {event.schedule.map((schedule) => (
                            <Box key={schedule.title}>
                                <Typography variant="h6" style={{ fontWeight: 'bold' }} pt={2}>
                                    {schedule.title}
                                </Typography>

                                <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                                    {schedule.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}

                {/* Sponsors */}
                {event.sponsors && event.sponsors.length > 0 && (
                    <Box mt={4}>
                        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                            Sponsors
                        </Typography>

                        <Typography variant="body1" style={{ fontWeight: 'bold' }} mt={1}>
                            {event.sponsors.length > 1 ? 'Thanks to our sponsors:' : 'Thanks to our sponsor:'}
                        </Typography>

                        {event.sponsors.map((sponsor) => (
                            <Box key={sponsor.name} py={1}>
                                <Link href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                    {sponsor.logo ? (
                                        <Box ml={1}>
                                            <Image src={sponsor.logo} alt={sponsor.name}
                                                width={200}
                                                height={200}
                                                style={{ height: "100%", filter: sponsor.invertLogo ? "invert(100%)" : 'none' }}
                                            />
                                        </Box>
                                    ) : sponsor.name}
                                </Link>

                            </Box>
                            //     {/* <img src={sponsor.logo} alt={sponsor.name} /> */}
                            //     {sponsor}
                            // <Typography variant="body1" key={sponsor.name}>
                            //     {sponsor.name}
                            // </Typography>
                        ))}
                    </Box>
                )}

                {/* Recording */}
                {event.recording && (
                    <Box mt={4}>
                        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                            Recording
                        </Typography>

                        <Box pt={3} >
                            <iframe
                                width={'100%'}
                                height="500px"
                                src={event.recording}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </Box>
                    </Box>
                )}

                {/* Pictures */}
                {event.pictures && event.pictures.length > 0 && (
                    <Box mt={4}>
                        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                            Pictures
                        </Typography>

                        <Box display="flex" flexWrap="wrap" mt={1}>
                            {event.pictures.map((picture) => (
                                <Box key={picture} mr={1} mb={1}>
                                    <Image src={picture} alt="Event" style={{ width: '100%' }} />
                                </Box>
                            )
                            )}
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
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