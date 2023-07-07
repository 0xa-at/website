import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { EventType } from "../utils/types";
import { useRouter } from "next/router";

interface Props {
  event: EventType;
}

export default function AddToCalendarButton({ event }: Props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const icalUrl = router.basePath + event.link + ".ics";

  const close = () => setAnchorEl(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const downloadIcal = () => {
    window.open(icalUrl, "_blank");
    close();
  };

  return (
    <>
      <Button onClick={handleClick}>Add to Calendar</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={close}>
        <MenuItem onClick={downloadIcal}>Download iCal File</MenuItem>
        {/* <MenuItem onClick={}>Google Calendar</MenuItem>
                <MenuItem onClick={}>Microsoft Calendar</MenuItem> */}
      </Menu>
    </>
  );
}
