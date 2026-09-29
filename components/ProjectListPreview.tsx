import { Link, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { ProjectType } from "../utils/types";

export default function ProjectListPreview({ project }: { project: ProjectType }) {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box m={5} mx={isMobile ? 0 : 5}>
            <Link variant="h5" href={`/projects/${project.id}`}>{project.title}</Link>
        </Box>
    )
}
