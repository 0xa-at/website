import { Link, Typography } from "@mui/material";

export default function PostMetadata({ date, author }: { date: string, author: string }) {
    return (
        <Typography variant="subtitle1">
            {date.toString()} by <Link href={`/author/${author}`}>{author}</Link>
        </Typography>
    )
}