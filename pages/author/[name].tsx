import { Avatar, Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import AuthorDetails from "../../components/AuthorDetails";
import AuthorSocials from "../../components/AuthorSocials";
import PostPreview from "../../components/PostPreview";
import PostType from "../../utils/post";
import { getAllAuthors, getPostsByAuthor } from "../../utils/api";

type Props = {
    posts: PostType[]
}

export default function AuthorPage({ posts }: Props) {
    return (
        <Box >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Avatar sx={{ bgcolor: grey[500], width: 150, height: 150 }} />
                </Box>

                <Stack direction="column" spacing={2} p={5}>
                    <AuthorDetails />
                    <AuthorSocials />
                </Stack>
            </Box >

            {/* Recent posts */}
            <Typography variant="h4">Posts</Typography>
            {posts.map(post => (
                <PostPreview key={post.slug} post={post} />
            ))}

            {/* Recent talks */}
            <Typography variant="h4">Talks</Typography>
            <Typography variant="subtitle1">No recent talks found</Typography>
        </Box >
    )
}

type Params = {
    params: {
        name: string
    }
}

export async function getStaticProps({ params }: Params) {
    const posts = getPostsByAuthor(params.name, [
        'title',
        'date',
        'slug',
        'author',
        'content',
    ])

    return {
        props: {
            posts
        },
    }
}

export async function getStaticPaths() {
    const authors = getAllAuthors();
    console.log(authors);

    return {
        paths: authors.map((author) => {
            return {
                params: {
                    name: author,
                },
            }
        }),
        fallback: false,
    }
}