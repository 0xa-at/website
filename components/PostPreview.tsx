import { Link, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import PostType, { AuthorType } from "../utils/types";
import PostMetadata from "./PostMetadata";

export default function PostPreview({ post }: { post: PostType }) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box m={5} mx={isMobile ? 0 : 5}>
            <Link variant="h5" href={`/posts/${post.id}`}>{post.title}</Link>
            <PostMetadata date={post.date} author={post.author as AuthorType} />
        </Box>
    )
}