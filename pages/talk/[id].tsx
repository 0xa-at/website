import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import PostHeader from "../../components/PostHeader"
import { getAllTalks, getTalkById } from "../../utils/api"
import { AuthorType, TalkType } from "../../utils/types"

export default function TalkPage({ talk }: { talk: TalkType }) {
    const videoUrl = talk.youtube.replace('youtube.com/watch?v=', 'youtube-nocookie.com/embed/') + '?rel=0';
    return (
        <Box>
            <PostHeader title={talk.title} author={talk.speaker as AuthorType} date={talk.date} />

            <Box pt={3}>
                <iframe
                    width="80%"
                    height="500px"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                <Typography variant="subtitle1">{talk.description}</Typography>

                {/* TODO: Files */}
            </Box>
        </Box >
    )
}


type Params = {
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: Params) {
    const talk = getTalkById(params.id)

    return {
        props: {
            talk
        },
    }
}

export async function getStaticPaths() {
    const talks = getAllTalks()

    return {
        paths: talks.map((talk) => {
            return {
                params: {
                    id: talk.id,
                },
            }
        }),
        fallback: false,
    }
}