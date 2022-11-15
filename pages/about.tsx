import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import PageHeader from "../components/PageHeader";
import Person from "../components/Person";

export default function AboutPage() {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <Box>
      <PageHeader title={"About us"} />
      <Typography pt={4} variant="h3">
        0xA Science Association
      </Typography>
      <hr></hr>
      <Typography pt={1} variant="h5">
        Association for the advancement of science and technology in society
      </Typography>
      <Typography variant="body1">
        <br></br>
        <br></br>
        <b>
          <i>"What we do?"</i>
        </b>
        <br></br>
        <br></br>
        Talks, workshops, projects and cooperations by members for members.
        <br></br>
        <br></br>
        <b>
          <i>"Who we are for?"</i>
        </b>
        <br></br>
        <br></br>
        Everyone who is interested in gaining knowledge, sharing knowledge and
        networking amongst competent people.
        <br></br>
        <br></br>
      </Typography>
      <div>
        As our name suggests, we are committed to foster science and technology.
        But what do we mean by that?<br></br>
        <ul>
          <li>
            On the one hand, we offer opportunities to advance your knowledge,
            particularly in technical domains.
          </li>
          <li>
            On the other hand, we provide a platform to present your own
            knowledge to a competent and interested audience.
          </li>
        </ul>
      </div>
      <Typography>
        We organize presentations, where our members can shine with their
        competence and share that knowledge with interested listeners. A win-win
        situation. These presentations are recorded and available online
        afterwards.
        <br />
        We offer a platform for our members to write blogposts on scientific
        topics and make them available to a interested community to read,
        discuss and learn. We plan workshops and projects, to not leave practice
        out of the equation. <br /> A fair share between theory and practice is
        important to us, and a presentation on this very topic will be the
        kick-off at our launch-event.
        <br />
        <br />
        Another mission of 0xA is to connect people. We will create a network
        that enables its members to establish competent contacts fast and
        easily. This is why we will also foster the conversion of common
        projects, e.g. through cooperations with companies or by providing
        know-how. In the future will therefore arise a colourful mix of
        presentations, workshops, blogposts and other events on various topics,
        and we are already looking forward to Your contribution.
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
