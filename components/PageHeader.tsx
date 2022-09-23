import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";

export default function PageHeader({ title }: { title: string }) {
    return (
        <Box pt={4} >
            <Head>
                <title>{title}</title>
            </Head>

            <Typography variant="h3">
                {title}
            </Typography>

            <Divider />


        </Box >
    )
}