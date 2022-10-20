import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image';

export default function BillboardPage() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%'
        }}>
            <Typography variant="h1" sx={{
                fontSize: isMobile ? '30vw' : '15rem',
                fontWeight: 'bold',
            }}>
                0xA
            </Typography>

            <Typography variant="h3" sx={{ fontSize: isMobile ? '8vw' : '3rem', fontWeight: 'bold', mt: '-1em' }}>
                Science Association
            </Typography>

            <Typography pt={8} mb={-3} zIndex={3} variant="h2" sx={{ fontWeight: 'bold' }}>
                We want YOU!
            </Typography>

            <Box>
                <Image src="0xa-qr.svg" alt="Code Image" width={"500px"} height={"500px"} style={{}} />
            </Box>
        </Box>


    )
}