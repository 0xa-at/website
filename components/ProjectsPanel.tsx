import { Grid } from "@mui/material";
import { ProjectType } from "../utils/types";
import ProjectPreview from "./ProjectPreview";

type Props = {
    projects: ProjectType[];
}

export default function ProjectsPanel(props: Props) {
    return (
        <Grid container spacing={2}>
            {props.projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                    <ProjectPreview title={project.title} description={project.description} image={project.image} link={project.link} />
                </Grid>
            ))}
        </Grid>
    )
}
