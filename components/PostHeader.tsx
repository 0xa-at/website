import { Link, Typography } from "@mui/material"
import { Box } from "@mui/system"
import PostType from "../utils/post"
import PostMetadata from "./PostMetadata"

export default function PostHeader({ post }: { post: PostType }) {
    return (
        <Box mt={5}>
            <Typography variant="h4">{post.title}</Typography>
            <PostMetadata date={post.date} author={post.author} />
        </Box>
    )
}