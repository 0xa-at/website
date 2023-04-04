import { Typography } from "@mui/material";

export default function EventMetadata({ date }: { date: Date | string }) {
    return (
        <Typography variant="subtitle1">
            {date instanceof Date ? date.toString() : date}
        </Typography>
    )
}