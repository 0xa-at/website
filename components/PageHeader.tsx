import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}


export default function PageHeader({ title }: { title: string }) {
    return (
        <Box pt={4} >
            <Typography variant="h3">
                {title}
            </Typography>

            <Divider />


        </Box >
    )
}