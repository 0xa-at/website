import { Avatar, Box, Divider, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Stack } from "@mui/system";
import AuthorDetails from "../../components/AuthorDetails";
import AuthorSocials from "../../components/AuthorSocials";
import PostPreview from "../../components/PostPreview";
import PostType, { AuthorType, TalkType } from "../../utils/types";
import { getAllAuthors, getAuthorById, getPostsByAuthor, getTalksBySpeaker } from "../../utils/api";
import TalkPreview from "../../components/TalkPreview";

type Props = {
    author: AuthorType,
    posts: PostType[],
    talks: TalkType[]
}

export default function AuthorPage({ author, posts, talks }: Props) {
    console.log()
    return (
        <Box >
            <Box pb={3} pt={3} sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Avatar sx={{ bgcolor: grey[500], width: 150, height: 150 }} />
                </Box>

                <Stack direction="column" spacing={2} p={5}>
                    <AuthorDetails author={author} />
                    <AuthorSocials author={author} />
                </Stack>
            </Box >

            {/* Recent posts */}
            {
                posts.length > 0 &&
                <span>
                    <Typography variant="h4">Posts</Typography>
                    {posts.map(post => (
                        <PostPreview key={post.id} post={post} />
                    ))}
                </span>
            }

            {/* Recent talks */}
            {
                talks.length > 0 &&
                <span>
                    <Typography variant="h4">Talks</Typography>
                    {talks.map(talk => (
                        <TalkPreview key={talk.id} talk={talk} />
                    ))}
                </span>
            }


        </Box >
    )
}

type Params = {
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: Params) {
    const author = getAuthorById(params.id)
    const posts = getPostsByAuthor(params.id);
    const talks = getTalksBySpeaker(params.id);

    return {
        props: {
            author,
            posts,
            talks
        },
    }
}

export async function getStaticPaths() {
    const authors = getAllAuthors();
    return {
        paths: authors.map((author) => {
            return {
                params: {
                    id: author.id,
                },
            }
        }),
        fallback: false,
    }
}