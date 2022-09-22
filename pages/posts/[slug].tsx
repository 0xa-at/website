import { Box } from "@mui/material"
import { useRouter } from "next/router"
import PostBody from "../../components/PostBody"
import PostHeader from "../../components/PostHeader"
import PostType from "../../utils/post"
import markdownToHtml, { getAllPosts, getPostBySlug } from "../../utils/posts"

type Props = {
    post: PostType
    preview?: boolean
}

export default function PostPage({ post, preview }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        // TODO: Redirect to error page
        return (<div>Invalid post</div>)
    }

    return (
        <Box>
            <PostHeader post={post} />
            <PostBody content={post.content} />
        </Box>
    )
}


type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

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
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}