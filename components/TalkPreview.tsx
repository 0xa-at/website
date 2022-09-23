import { Link } from "@mui/material"
import { Box } from "@mui/system"
import { TalkType } from "../utils/types"
import PostMetadata from "./PostMetadata"

export default function TalkPreview({ talk }: { talk: TalkType }) {
    return (
        <Box m={5}>
            <Link variant="h5" href={`/talk/${talk.id}`}>{talk.title}</Link>
            <PostMetadata date={talk.date} author={talk.speaker} />
        </Box>
    )
}