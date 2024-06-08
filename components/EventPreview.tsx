import { CardActionArea, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from 'next/image';

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

            <CardMedia>
                    <div style={{ width: "100%", height: 200, position: "relative" }}>
                        <Image
                            fill
                            src={props.image}
                            alt={props.title}
                            style={{ objectFit: "cover" }}
                            loading={"lazy"}
                            />
                    </div>
            </CardMedia>

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