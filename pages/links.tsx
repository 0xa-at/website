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
            <Box style={{ display: "flex", padding: 40, justifyContent: "center" }}>
                <Box style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 150,
                    height: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <Image
                        style={{ cursor: 'pointer' }}
                        src={'/logo-white.png'}
                        width={90}
                        height={40}
                        alt="0xA Logo"
                    />
                </Box>
            </Box>

            <Head>
                <title>Linktree - 0xA Science Association</title>
            </Head>

            <Box style={{ textAlign: "center" }}>

                <Typography variant="h3" >
                    0xA Science Association
                </Typography>
                <Divider />

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
            href: ["https:", "", "chat.whatsapp.com", "LloUBdts2iB1JVkBsqLMq6"],
            title: "WhatsApp Community",
            icon: faWhatsapp,
        },
        {
            href: "https://discord.com/invite/26KVauxdrn",
            title: "Discord",
            icon: faDiscord,
        },
        {
            href: "https://www.instagram.com/0xa.at/",
            title: "Instagram",
            icon: faInstagram,
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