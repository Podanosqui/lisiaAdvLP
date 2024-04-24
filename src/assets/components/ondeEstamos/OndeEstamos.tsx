import { Stack, Typography, useMediaQuery } from "@mui/material";
import BGMapArea from "../../images/BGMapArea.png";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function OndeEstamos() {

    const isTablet = useMediaQuery('(min-width:900px)');


    return (
        <>
            <Stack
                width="100%"
                id="ondeEstamos"
                padding={isTablet ? " 4rem 10rem" : "3rem 1rem"}
                sx={{
                    backgroundImage: `url(${BGMapArea})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                }}>
                <Stack sx={{}}>
                    <Typography
                        fontFamily="Cinzel"
                        color="#fff"
                        pl={2}
                        fontSize="32px"
                        my={5}
                        sx={{
                            borderLeft: "5px solid #fff"
                        }}
                        fontWeight="500"
                    >Onde estamos?</Typography>
                </Stack>
                <Stack>
                    <Stack direction="row" alignItems="center" mb={3}>
                        <PlaceOutlinedIcon fontSize="large" sx={{ color: "#fff", mr: 1 }} />
                        <Typography
                            fontSize="14px"
                            color="#fff"
                        >Rua Gago Coutinho 94, Laranjeiras, Rio de Janeiro/RJ - CEP 22.221-070</Typography>
                    </Stack>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3674.5134194756893!2d-43.18375077380601!3d-22.9313113887496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1713552836512!5m2!1spt-BR!2sbr" width="100%" height="350" style={{ border: 0 }} loading="lazy"></iframe>
                </Stack>

            </Stack>
        </>
    );
}