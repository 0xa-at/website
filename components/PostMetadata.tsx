import { Link, Typography } from "@mui/material";
import { AuthorType } from "../utils/types";

export default function PostMetadata({ date, author }: { date: string, author: AuthorType }) {
    return (
        <Typography variant="subtitle1">
            {date.toString()} by <Link href={`/author/${author.id}`}>{author.name}</Link>
        </Typography>
    )
}