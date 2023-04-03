import { Box } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

type Props = {
    images: string[];
}

export default function ImageCarousel(props: Props) {
    return (
        <Carousel
            fullHeightHover={false}
            autoPlay={true}
            stopAutoPlayOnHover={true}
            navButtonsAlwaysVisible={true}
            indicators={true}
        >
            {
                props.images.map((link, i) =>
                    <Box key={i} height={'60vh'} position={"relative"}>
                        <Image src={link} alt="Code Image" fill style={{ objectFit: "cover" }} />
                    </Box>
                )
            }
        </Carousel>
    )
}
