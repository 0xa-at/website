import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, IconButton, Link, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import {
    faLinkedin,
    faGithub,
    faInstagram,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const socials = [
    { name: 'Discord', href: 'https://discord.com/invite/26KVauxdrn', icon: faDiscord },
    { name: 'Instagram', href: 'https://www.instagram.com/0xa.at/', icon: faInstagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/0xa-science-association/', icon: faLinkedin },
    { name: 'GitHub', href: 'https://github.com/0xa-at', icon: faGithub },
]

export default function Footer() {

    return (
        <AppBar position="static">
            <Container>
                <Grid container spacing={4} sx={{ py: 4 }}>
                    {/* Contact */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 1 }}>Contact</Typography>

                        <Typography variant="body1">0xA Science Association</Typography>
                        <Typography variant="body1">Julius-Raab Straße 10/539</Typography>
                        <Typography variant="body1">4040 Linz</Typography>
                        <Link href="mailto:office@0xa.at" color="inherit">office@0xa.at</Link>
                    </Grid>

                    {/* Code Of Conduct */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 1 }}>Code Of Conduct</Typography>
                        <Typography variant="body1">
                            The 0xA Science Association uses the <Link href="https://berlincodeofconduct.org/" color="inherit">Berlin Code of Conduct</Link>.
                            Our primary goal is to be inclusive to the largest number of contributors, with the most varied and diverse backgrounds possible.
                        </Typography>
                    </Grid>
                    {/* Social */}
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 1 }}>Social</Typography>

                        {socials.map((social) => (
                            <Link href={social.href} color="inherit" key={social.name}>
                                <IconButton aria-label={social.name} sx={{ color: 'white' }} >
                                    <FontAwesomeIcon icon={social.icon} size='2x' />
                                </IconButton>
                            </Link>
                        ))}

                        {/* Partnered with */}
                        <Typography variant="h5" sx={{ fontWeight: 'bold', pt: 3, pb: 1 }}>Partnered with</Typography>
                        <Link href="https://fivesquare.ai" target="_blank" rel="noopener noreferrer">
                            <Image src="/sponsors/fivesquare.svg" alt="Fivesquare" width={200} height={40} />
                        </Link>

                        <Link href="https://www.jku.at/en/lit-open-innovation-center/" target="_blank" rel="noopener noreferrer">
                            <Image src="/sponsors/lit-oic.png" alt="LIT OIC" width={200} height={40} />
                        </Link>

                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    )
}