import { Box, Grid, Paper, Typography, styled } from "@mui/material";
import PageHeader from "../components/PageHeader";
import Image from "next/image";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function JoinUsPage() {
    return (
        <Box>
            <PageHeader title="Why should I join?" />

            <Grid
                container
                direction="row-reverse"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                pt={5}
            >
                {/* Network */}
                <Grid item xs={6}>
                    <Image src="/images/qc/DSC_2731.jpg" width={500} height={300} alt={"asdf"} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Network</Typography>
                    We have such an amazing network. Meet new people and connect with bla bla bla
                </Grid>

                {/* Drinks and Snacks */}
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Drinks and Snacks</Typography>
                    Lots of free food and drinks!
                </Grid>
                <Grid item xs={6}>
                    <Image src="/images/qc/DSC_2731.jpg" width={500} height={300} alt={"asdf"} />
                </Grid>

                {/* Member-only Events */}
                <Grid item xs={6}>
                    <Image src="/images/qc/DSC_2731.jpg" width={500} height={300} alt={"asdf"} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Member-only Events</Typography>
                    Really cool private events hosted at amazing locations
                </Grid>

                {/* Discount / Priority Access */}
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Discount & Priority Access</Typography>
                    Discounts on events and priority access to events
                </Grid>
                <Grid item xs={6}>
                    <Image src="/images/qc/DSC_2731.jpg" width={500} height={300} alt={"asdf"} />
                </Grid>

                {/* Community */}
                <Grid item xs={6}>
                    <Image src="/images/qc/DSC_2731.jpg" width={500} height={300} alt={"asdf"} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>The stage is yours</Typography>
                    Present your ideas and projects to the community
                </Grid>

                {/* Voice in the organization */}
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Voice in the organization</Typography>
                    Your voice matters. We are a community and we want to hear from you
                </Grid>
                <Grid item xs={6}>
                    <Image src="/images/qc/DSC_2731.jpg" width={500} height={300} alt={"asdf"} />
                </Grid>
            </Grid>

            {/*  */}
            <Typography variant="h3" pt={5}>How can I join?</Typography>
            <Typography variant="body1">It's free. Where's the catch? There's none. We are a non-profit and want to make it accessible for everyone.</Typography>
        </Box>
    )
}