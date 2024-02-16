import { Box, Button, Grid, Paper, Typography, styled, useMediaQuery } from "@mui/material";
import PageHeader from "../components/PageHeader";
import Image from "next/image";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const items = [
    {
        title: "Network",
        description: "As part of your membership with us, you can enjoy opportunities for networking through events, online communities, and other platforms where you can meet and connect with like-minded individuals.",
        image: "/images/join_us/network.jpg"
    },
    {
        title: "Drinks and Snacks",
        description: "At select events, we offer complimentary refreshments such as drinks and snacks for our valued members. While not every occasion provides this perk, keep an eye out for those that do, as it can make for a more convenient experience.",
        image: "/images/join_us/drinks_and_snacks.jpg"

    },
    {
        title: "Member-only Events",
        description: "Experience exclusive member-only events including Stammtisch gatherings and behind-the-scenes tours of local businesses.",
        image: "/images/join_us/member_only_events.jpg"
    },
    {
        title: "Discount & Priority Access",
        description: "Members receive exclusive discounts and priority access to various events including workshops, hackathons, and merchandise at reduced prices.",
        image: "/images/join_us/discount.jpg"
    },
    {
        title: "The stage is yours",
        description: "In addition to publishing blog posts and hosting talks, our members have the opportunity to share their innovative ideas and projects, providing a platform for collaboration and growth within the community.",
        image: "/images/join_us/the_stage_is_yours.jpg"
    },
    {
        title: "Voice in the organization",
        description: "Our members enjoy having a voice in the direction and decision making of our association. Additionally, they can choose to participate in various projects and initiatives, allowing them to make meaningful contributions to their community.",
        image: "/images/qc/DSC_2731.jpg"
    },
];

export default function JoinUsPage() {
    const isMobile = useMediaQuery("(max-width:900px)");

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
                {
                    items.map((item, i) => isMobile || i % 2 === 0 ? (
                        <>

                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" component="h1" gutterBottom>{item.title}</Typography>
                                {item.description}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Box height={'25vh'} position={"relative"} >
                                    <Image src={item.image} alt="" fill style={{ objectFit: "cover", border: 1, borderRadius: 5 }} />
                                </Box>
                            </Grid>
                        </>)
                        : (
                            <>
                                <Grid item xs={12} md={6}>
                                    <Box height={'25vh'} position={"relative"}>
                                        <Image src={item.image} alt="" fill style={{ objectFit: "cover", border: 1, borderRadius: 5 }} />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4" component="h1" gutterBottom>{item.title}</Typography>
                                    {item.description}
                                </Grid>
                            </>
                        ))
                }
            </Grid>

            {/*  */}
            <Typography variant="h3" pt={5}>How can I join?</Typography>
            <Typography variant="body1" py={1}>
                To become part of our community, all you have to do is fill out this simple form. You don&apos;t need any special skills or qualifications - anyone is welcome to join! And yes, we know what you&apos;re thinking... there is absolutely NO CATCH! This offer is completely FREE. So why wait? Join us today and take your first step towards becoming one of the chosen few!
            </Typography>

            <Button variant="contained" color="primary" size="large" href="https://forms.gle/mCs5Z2BNP8K28Dg98" target="_blank" rel="noopener noreferrer">Join us</Button>
        </Box >
    )
}
