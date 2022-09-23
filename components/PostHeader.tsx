import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import PostMetadata from "./PostMetadata"

type Props = {
    title: string
    date: string
    author: string
}

export default function PostHeader({ title, date, author }: Props) {
    return (
        <Box mt={5}>
            <Typography variant="h4">{title}</Typography>
            <PostMetadata date={date} author={author} />
        </Box>
    )
}