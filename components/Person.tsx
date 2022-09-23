import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
    image?: string
    name: string
    role: string
}

export default function Person({ image, name, role }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: grey[500], width: 100, height: 100 }} />
            <Typography pt={1} variant="h6">{name}</Typography>
            <Typography variant="subtitle1">{role}</Typography>

        </Box>
    )
}