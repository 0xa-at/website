import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AuthorType } from "../utils/types";

type Props = {
    author: AuthorType
}

export default function AuthorDetails({ author }: Props) {
    return (
        <Box>
            <Typography variant="h5" fontWeight={'bold'}>{author.name}</Typography>
            <Typography variant="subtitle1">{author.description}</Typography>
        </Box>
    )
}