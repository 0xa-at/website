import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import PostPreview from "../components/PostPreview";
import Post from "../utils/types";
import { getAllPosts } from "../utils/api";

type Props = {
    allPosts: Post[]
}

export default function BlogPage({ allPosts }: Props) {
    return (
        <Box>
            <PageHeader title="Blog" />

            {allPosts.map((post) => (
                <PostPreview key={post.slug} post={post} />
            ))}
        </Box>
    )
}



export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ])

    return {
        props: { allPosts },
    }
}