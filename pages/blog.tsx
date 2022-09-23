import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import PostPreview from "../components/PostPreview";
import { getAllPosts } from "../utils/api";
import PostType from "../utils/types";

type Props = {
    allPosts: PostType[]
}

export default function BlogPage({ allPosts }: Props) {
    return (
        <Box>
            <PageHeader title="Blog" />

            {allPosts.map((post) => (
                <PostPreview key={post.id} post={post} />
            ))}
        </Box>
    )
}



export const getStaticProps = async () => {
    const allPosts = getAllPosts()

    return {
        props: { allPosts },
    }
}