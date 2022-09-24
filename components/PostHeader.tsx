import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { AuthorType } from "../utils/types"
import PostMetadata from "./PostMetadata"

type Props = {
    title: string
    date: Date
    author: AuthorType
}

export default function PostHeader({ title, date, author }: Props) {
    return (
        <Box mt={5}>
            <Typography variant="h4">{title}</Typography>
            <PostMetadata date={date} author={author} />
        </Box>
    )
}