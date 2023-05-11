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
                    As part of your membership with us, you can enjoy opportunities for networking through events, online communities, and other platforms where you can meet and connect with like-minded individuals.
                </Grid>

                {/* Drinks and Snacks */}
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Drinks and Snacks</Typography>
                    At select events, we offer complimentary refreshments such as drinks and snacks for our valued members. While not every occasion provides this perk, keep an eye out for those that do, as it can make for a more convenient experience.
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
                    Experience exclusive member-only events including Stammtisch gatherings and behind-the-scenes tours of local businesses.
                </Grid>

                {/* Discount / Priority Access */}
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Discount & Priority Access</Typography>
                    Members receive exclusive discounts and priority access to various events including workshops, hackathons, and merchandise at reduced prices.
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
                    In addition to publishing blog posts and hosting talks, our members have the opportunity to share their innovative ideas and projects, providing a platform for collaboration and growth within the community.
                </Grid>

                {/* Voice in the organization */}
                <Grid item xs={6}>
                    <Typography variant="h4" component="h1" gutterBottom>Voice in the organization</Typography>
                    Our members enjoy having a voice in the direction and decision making of our association. Additionally, they can choose to participate in various projects and initiatives, allowing them to make meaningful contributions to their community.
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