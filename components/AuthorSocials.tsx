import { Box, Link } from "@mui/material";
import { AuthorType } from "../utils/types";

export default function AuthorSocials({ author }: { author: AuthorType }) {
    const socials = [
        {
            name: 'Github',
            link: author.github
        },
        {
            name: 'Twitter',
            link: author.twitter
        },
        {
            name: 'Website',
            link: author.website
        },
        {
            name: 'Linkedin',
            link: author.linkedin
        },
    ].filter(s => s.link);

    return (
        <Box>
            {socials.map(s =>
                <span key={s.link}><Link href={s.link}>{s.name}</Link> </span>
            )}
        </Box>
    )
}