import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

const pages = [
    { name: 'Blog', href: '/blog' },
    { name: 'Talks', href: '/talks' },
    { name: 'About', href: '/about' },
];

const NavBar = () => {
    const router = useRouter();

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 900,
                            fontSize: '2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        0xA
                    </Typography>

                    {/* Header Items */}
                    <Box sx={{
                        flexGrow: 1, justifyContent: 'flex-end', display: 'flex'
                    }}>
                        {
                            pages.map((page) => (
                                <Button
                                    key={page.href}
                                    onClick={() => router.push(page.href)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default NavBar;