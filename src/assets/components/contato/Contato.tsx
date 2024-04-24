import { Stack, Typography, useMediaQuery, IconButton } from "@mui/material";

//Icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Contato() {
    const isTablet = useMediaQuery('(min-width:900px)');



    return (
        <>
            <Stack width="100%" id="contato" padding={isTablet ? "3rem 2rem 2rem 2rem" : "1rem"}>
                <Stack
                    direction={isTablet ? "row" : "column"}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack width={isTablet ? "50%" : "100%"} alignItems={"flex-start"}>
                        <Stack>
                            <Typography
                                color="#193D5A"
                                fontSize="26px"
                                fontFamily="Cinzel"
                                fontWeight="500"
                                mb={5}
                                pl={2}
                                sx={{
                                    borderLeft: "5px solid #193D5A"
                                }}
                            >Fale Conosco</Typography>
                        </Stack>
                        <Stack mb={2}>
                            <Typography color="#193D5A">Para agendamento de atendimento presencial ou por videoconferência, entre em contato por Email, Telefone ou WhatsApp.</Typography>
                        </Stack>
                        <Stack mb={2}>
                            <Typography color="#f59f36">Primeiro atendimento e agendamento:</Typography>
                            <Typography color="#193D5A">Tel/WhatsApp: (21) 96646-6366</Typography>
                            <Typography color="#193D5A">Email: contato@bocchese.adv.br</Typography>
                        </Stack>
                        <Stack mb={5}>
                            <Typography color="#193D5A">Estamos online de segunda à sábado das 9h às 19h, e disponíveis 27/7 para atendimento de sua urgência.</Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        borderRadius="16px"
                        alignItems="center"
                        py="2rem"
                        bgcolor="#193D5A"
                        maxWidth="600px"
                        width={isTablet ? "50%" : "100%"}>
                        <Typography
                            color="#fff"
                            fontFamily="Cinzel"
                            fontWeight="500"
                            fontSize="22px"
                        >Nossas redes:</Typography>
                        <Stack
                            py="1rem"
                            mt={5}
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-evenly"
                            gap={1}
                            borderTop="1px solid #fff">
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    bgcolor: "#193d5a",
                                    padding: "12px",
                                    mx: 2,
                                    '&:hover': {
                                        bgcolor: "#fff",
                                        color: "#193d5a"
                                    }
                                }}
                            ><WhatsAppIcon fontSize="large" /></IconButton>
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    bgcolor: "#193d5a",
                                    padding: "12px",
                                    mx: 2,
                                    '&:hover': {
                                        bgcolor: "#fff",
                                        color: "#193d5a"
                                    }
                                }}
                            ><FacebookIcon fontSize="large" /></IconButton>
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    bgcolor: "#193d5a",
                                    padding: "12px",
                                    mx: 2,
                                    '&:hover': {
                                        bgcolor: "#fff",
                                        color: "#193d5a"
                                    }
                                }}
                            ><InstagramIcon fontSize="large" /></IconButton>

                        </Stack>
                        <Stack
                            py="1rem"
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-evenly"
                            gap={1}
                        >

                            <IconButton
                                sx={{
                                    color: "#fff",
                                    bgcolor: "#193d5a",
                                    padding: "12px",
                                    mx: 2,
                                    '&:hover': {
                                        bgcolor: "#fff",
                                        color: "#193d5a"
                                    }
                                }}
                            ><XIcon fontSize="large" /></IconButton>
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    bgcolor: "#193d5a",
                                    padding: "12px",
                                    mx: 2,
                                    '&:hover': {
                                        bgcolor: "#fff",
                                        color: "#193d5a"
                                    }
                                }}
                            ><LinkedInIcon fontSize="large" /></IconButton>
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    bgcolor: "#193d5a",
                                    padding: "12px",
                                    mx: 2,
                                    '&:hover': {
                                        bgcolor: "#fff",
                                        color: "#193d5a"
                                    }
                                }}
                            ><EmailIcon fontSize="large" /></IconButton>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
