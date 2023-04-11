import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import Person from "../components/Person";

export default function AboutPage() {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <Box pb={5}>
      <PageHeader title={"About us"} />

      <Typography pt={3} variant={"body1"}>
        We are a group of motivated individuals looking to expand our network, share our knowledge and organize events.
        Events include workshops, talks, hackathons, and more. We are open to all people regardless of their background, experience, or skill level.
      </Typography>

      <Typography pt={3} variant="h4">Leadership</Typography>
      <Box pt={5} sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
        <Person name={"Alexander Peherstorfer"} role={"Chairman"} image="/images/vorstand/ap.jpg" />
        <Person name={"Severin Mairinger"} role={"Chairman deputy"} image="/images/vorstand/sm.jpg" />
      </Box>
      <Box pt={10} sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
        <Person name={"Matthias Heiden"} role={"Secretary"} image="/images/vorstand/mh.jpg" />
        <Person name={"Andreas Schmid"} role={"Secretary deputy"} />
        <Person name={"Alexander Brunner"} role={"Accountant"} image="/images/vorstand/ab.jpg" />
        <Person name={"Tobias Pucher"} role={"Accountant deputy"} image="/images/vorstand/tp.jpg" />
      </Box>

      {/* Imprint */}
      <Typography pt={5} variant="h4">Imprint</Typography>
      <Typography pt={2} variant="h5">Media Owner</Typography>
      <Typography variant="body1">0xA Science Association</Typography>
      <Typography variant="body1">Julius-Raab-Straße 10</Typography>
      <Typography variant="body1">4040 Linz</Typography>
      <Typography variant="body1">Mail: office ~ at ~ 0xa.at </Typography>

      <Typography pt={2} variant="h5">Line of Business</Typography>
      <Typography variant="body1">0xA Science Association - Verein zur Förderung von Wissenschaft und Technik in der Gesellschaft</Typography>
      <Typography variant="body1">ZVR: 1009399442</Typography>
    </Box>
  )
}
