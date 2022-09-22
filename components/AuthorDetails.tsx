import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function AuthorDetails() {
    return (
        <Box>
            <Typography variant="h5" fontWeight={'bold'}>Max Mustermann</Typography>
            <Typography variant="subtitle1">Member since: 1.1.2022</Typography>
            <Typography variant="subtitle1">Role: Software Developer</Typography>
            <Typography variant="subtitle1">About me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit, neque a varius placerat, mi enim suscipit magna, sit amet tempus sapien odio imperdiet nisl.</Typography>
        </Box>
    )
}