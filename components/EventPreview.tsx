import { CardContent, CardMedia, Paper, Typography } from "@mui/material";

type Props = {
    title: string,
    description: string;
    image: string;
}
// TODO: directLinkTo => Link directly to talk instead of creating a wrapper page

export default function EventPreview(props: Props) {
    return (
        <Paper variant="outlined" sx={{ height: "100%" }}>
            <CardMedia
                component="img"
                height="100"
                image={props.image}
                alt={props.title}
            />

            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Paper>
    )
}