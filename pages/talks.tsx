import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import PostPreview from "../components/PostPreview";
import TalkPreview from "../components/TalkPreview";
import { getAllTalks } from "../utils/api";
import { TalkType } from "../utils/types";

type Props = {
    allTalks: TalkType[]
}

export default function TalksPage({ allTalks }: Props) {

    return (

        <Box>
            <PageHeader title="Talks" />

            {allTalks.map((talk) => (
                <TalkPreview key={talk.id} talk={talk} />
            ))}
        </Box>
    )
}

export const getStaticProps = async () => {
    const allTalks = getAllTalks()

    return {
        props: { allTalks },
    }
}