import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { getAllProjects, getProjectById } from "../../utils/api";
import { ProjectType } from "../../utils/types";

type Props = { project: ProjectType }

export default function ProjectPage({ project }: Props) {
    return (
        <Box>
            <Box pt={4}>
                <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                    {project.title}
                </Typography>
            </Box>

            {project.image && (
                <Box pt={3} position="relative" sx={{ aspectRatio: '16/9' }}>
                    <Image src={project.image} alt={project.title} fill
                        style={{ objectFit: "cover", borderRadius: 5 }} />
                </Box>
            )}

            <Typography variant="body1" style={{ whiteSpace: 'pre-line' }} pt={3}>
                {project.description}
            </Typography>

            {project.signup_link && (
                <Box pt={3}>
                    <Button variant="outlined" color="primary" size="large"
                        href={project.signup_link} target="_blank" rel="noopener noreferrer">
                        Get involved
                    </Button>
                </Box>
            )}
        </Box>
    )
}

type Params = { params: { id: string } }

export async function getStaticProps({ params }: Params) {
    const project = getProjectById(params.id)
    return { props: { project } }
}

export async function getStaticPaths() {
    const projects = getAllProjects()
    return {
        paths: projects.map((p) => ({ params: { id: p.id } })),
        fallback: false,
    }
}
