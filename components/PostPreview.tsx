import { Link, Typography } from "@mui/material"
import { Box } from "@mui/system"
import PostType from "../utils/types"
import PostMetadata from "./PostMetadata"

export default function PostPreview({ post }: { post: PostType }) {
    return (
        <Box m={5}>
            <Link variant="h5" href={`/posts/${post.slug}`}>{post.title}</Link>
            <PostMetadata date={post.date} author={post.author} />
        </Box>
    )
}