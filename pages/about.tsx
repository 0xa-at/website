import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import Person from "../components/Person";

export default function AboutPage() {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <Box>
      <PageHeader title={"About us"} />

      <Typography pt={3} variant={"body1"}>
        We are a group of motivated individuals looking to expand our network, share our knowledge and organize events.
        Events include workshops, talks, hackathons, and more. We are open to all people regardless of their background, experience, or skill level.
      </Typography>

      <Typography pt={3} variant="h4">
        Leadership
      </Typography>
      <Box
        pt={5}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: isMobile ? "column" : "row",
          gap: 2,
        }}
      >
        <Person name={"Alexander Peherstorfer"} role={"Chairman"} />
        <Person name={"Severin Mairinger"} role={"Vice-Chairman"} />
      </Box>
      <Box
        pt={10}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: isMobile ? "column" : "row",
          gap: 2,
        }}
      >
        <Person name={"Matthias Heiden"} role={"Secretary"} />
        <Person name={"Andreas Schmid"} role={"Vice-Secretary"} />
        <Person name={"Alexander Brunner"} role={"Accountant"} />
        <Person name={"Tobias Pucher"} role={"Vice-Accountant"} />
      </Box>
    </Box>
  );
}
