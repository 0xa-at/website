import { Box, Typography } from "@mui/material";
import { LinktreeLink } from "../utils/types";
import LinktreeButton from "../components/LinktreeButton";
import Head from "next/head";

import { faWhatsapp, } from '@fortawesome/free-brands-svg-icons';

type Props = {
    links: LinktreeLink[]
}

export default function EventsPage({ links }: Props) {
    return (
        <Box>
            <Head>
                <title>0xBookClub</title>
            </Head>

            <Box style={{ textAlign: "center", margin: "30vh 0" }}>
                <Typography variant="h3" >
                    0xBookClub
                </Typography>
                <Typography>
                    Brought to you by yours truly, 0xBookclub is a community welcoming readers of all genres and levels. 
                    We meet regularly and discuss books and other media we have consumed on a particular topic. 
                    If you are interested in joining, check out our Whatsapp community and join the 0xBookClub chat!
                </Typography>

                {links.map((link, idx) => (
                    <LinktreeButton key={idx} link={link} />
                ))}
            </Box>
        </Box>
    )
}

export const getStaticProps = async () => {
    const links: LinktreeLink[] = [
        {
            href: ["https:", "", "chat.whatsapp.com", "CazjR0pfl3lDTsBcmDzOhR"],
            title: "WhatsApp Community",
            icon: faWhatsapp,
        },
    ];

    return {
        props: { links },
    }
}