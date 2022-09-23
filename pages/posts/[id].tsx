import { Box } from "@mui/material"
import { useRouter } from "next/router"
import PostBody from "../../components/PostBody"
import PostHeader from "../../components/PostHeader"
import PostType from "../../utils/types"
import markdownToHtml, { getAllPosts, getPostById } from "../../utils/api"

type Props = {
    post: PostType
    preview?: boolean
}

export default function PostPage({ post, preview }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.id) {
        // TODO: Redirect to error page
        return (<div>Invalid post</div>)
    }

    return (
        <Box>
            <PostHeader title={post.title} author={post.author} date={post.date} />
            <PostBody content={post.content} />
        </Box>
    )
}


type Params = {
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostById(params.id)
    console.log(post);
    const content = await markdownToHtml(post?.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts()

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    id: post.id,
                },
            }
        }),
        fallback: false,
    }
}