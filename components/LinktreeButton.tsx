import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { LinktreeLink } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinktreeButton({ link }: { link: LinktreeLink }) {

    return (
        <Box onClick={() => window.open(typeof link.href === "string" ? link.href : link.href.join("/"), "_blank")} style={{ margin: 16 }}>

            <Button variant="outlined" color="primary" size="large" fullWidth style={{ fontSize: "1.5em" }}>
                <FontAwesomeIcon icon={link.icon} size='1x' style={{ marginRight: 8 }} />
                {link.title}

            </Button>
        </Box>
    )
}