import { CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

type Props = {
    title: string,
    description: string;
    image: string;
    link?: string;
}

export default function EventPreview(props: Props) {
    const router = useRouter();

    const handleClick = () => {
        if (props.link) {
            router.push(props.link);
        }
    };

    return (
        <Paper variant="outlined" sx={{ height: "100%" }}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="100"
                    image={props.image}
                    alt={props.title}
                    style={{ objectFit: "cover" }}
                />

                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Paper >
    )
}