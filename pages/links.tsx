import { Box, Divider, Typography } from "@mui/material";
import { LinktreeLink } from "../utils/types";
import Image from 'next/image';
import LinktreeButton from "../components/LinktreeButton";
import Head from "next/head";

import {
    faLinkedin,
    faGithub,
    faInstagram,
    faDiscord,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

type Props = {
    links: LinktreeLink[]
}

export default function EventsPage({ links }: Props) {
    return (
<Box>
    <Box style={{ display: "flex", justifyContent: "center", padding: 40 }}>
       <Image
            src={'/0xa_welcome_day_slide.jpg'}
            alt="0xA Welcome Day Slide"
            layout="responsive"
            width={800} // Set the width of the image (in pixels)
            height={400} // Set the height of the image (in pixels)
            style={{
                borderRadius: "10px", // Optional: Add rounded corners
            }}
        />

    </Box>
            <Head>
                <title>Connect</title>
            </Head>

            <Box style={{ textAlign: "center" }}>

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
        {
            href: "https://www.instagram.com/0xa.at/",
            title: "Instagram",
            icon: faInstagram,
        },
        {
            href: "https://discord.com/invite/26KVauxdrn",
            title: "Discord",
            icon: faDiscord,
        },
        {
            href: "https://www.linkedin.com/company/0xa-science-association/",
            title: "LinkedIn",
            icon: faLinkedin,
        },
        {
            href: "https://github.com/0xa-at",
            title: "GitHub",
            icon: faGithub,
        },
    ];

    return {
        props: { links },
    }
}
