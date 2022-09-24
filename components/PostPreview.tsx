import { Link } from "@mui/material"
import { Box } from "@mui/system"
import PostType, { AuthorType } from "../utils/types"
import PostMetadata from "./PostMetadata"

export default function PostPreview({ post }: { post: PostType }) {
    return (
        <Box m={5}>
            <Link variant="h5" href={`/posts/${post.id}`}>{post.title}</Link>
            <PostMetadata date={post.date} author={post.author as AuthorType} />
        </Box>
    )
}