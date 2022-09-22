import { Avatar, Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import AuthorDetails from "../../components/AuthorDetails";
import AuthorSocials from "../../components/AuthorSocials";

export default function AuthorPage() {
    return (
        <Box >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Avatar sx={{ bgcolor: grey[500], width: 150, height: 150 }} />
                </Box>

                <Stack direction="column" spacing={2} p={5}>
                    <AuthorDetails />
                    <AuthorSocials />
                </Stack>
            </Box >

            {/* Recent posts */}
            <Typography variant="h4">Posts</Typography>
            <Typography variant="subtitle1">No recent posts found</Typography>

            {/* Recent talks */}
            <Typography variant="h4">Talks</Typography>
            <Typography variant="subtitle1">No recent talks found</Typography>
        </Box >
    )
}