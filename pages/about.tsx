import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import Person from "../components/Person";

export default function AboutPage() {
    const isMobile = useMediaQuery('(max-width:800px)');

    return (
        <Box>
            <PageHeader title={"About us"} />

            <Typography pt={3} variant="h4">What we do</Typography>
            <Typography variant="body1">TBD</Typography>

            <Typography pt={3} variant="h4">Leadership</Typography>
            <Box pt={5} sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
                <Person name={"Alexander Peherstorfer"} role={"Chairman"} />
                <Person name={"Severin Mairinger"} role={"Chairman deputy"} />
            </Box>
            <Box pt={10} sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
                <Person name={"Matthias Heiden"} role={"Secretary"} />
                <Person name={"Andreas Schmid"} role={"Secretary deputy"} />
                <Person name={"Alexander Brunner"} role={"Accountant"} />
                <Person name={"Tobias Pucher"} role={"Accountant deputy"} />
            </Box>
        </Box>
    )
}