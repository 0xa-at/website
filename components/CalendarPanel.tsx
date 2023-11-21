import { Box, Paper, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function CalendarPanel() {
  const router = useRouter();
  const icalPath =  router.basePath + "events.ics";

  const downloadIcal = () => {
    window.open(icalPath, "_blank");
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.origin + "/" + icalPath);
  };

  return (
    <Paper variant="outlined">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Typography m={2}>Add all events to your calendar</Typography>
        <Stack m={2} direction="row" justifyContent="center" spacing={2}>
          <Button variant="text" onClick={copyUrl}>
            Copy iCal Link
          </Button>
          <Button variant="text" onClick={downloadIcal}>
            Download iCal File
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
