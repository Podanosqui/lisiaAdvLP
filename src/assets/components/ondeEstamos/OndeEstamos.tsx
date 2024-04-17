import { Stack, useMediaQuery } from "@mui/material";
import BGMapArea from "../../images/BGMapArea.png";

export default function OndeEstamos() {

    const isTablet = useMediaQuery('(min-width:900px)');


    return (
        <>
            <Stack
                padding={isTablet ? "" : ""}
                sx={{
                    backgroundImage: `url(${BGMapArea})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                }}>

            </Stack>
        </>
    );
}