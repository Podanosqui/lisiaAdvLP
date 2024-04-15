import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import DireitoPrevidenciario from "../../images/DireitoPrevidenciarioImg.png";
import DireitoTributario from "../../images/DireitoTributarioImg.png";
import LogoLisiaWhite from "../../images/LogoLisiaBoccheseBranco.png";
import BgOrange from "../../images/BGOrange.png";

export default function Acting() {

    const isTablet = useMediaQuery('(min-width:900px)');


    return (
        <>
            <Stack>
                <Stack px={isTablet ? 7 : 0} alignItems={isTablet ? "flex-start" : "center"}>
                    <Typography
                        fontSize="26px"
                        fontFamily="Cinzel"
                        fontWeight="500"
                        sx={{
                            borderLeft: "5px solid #f59f36",
                            pl: "5px",

                        }}
                    >Áreas de atuação</Typography>
                </Stack>
                <Stack direction={isTablet ? "row" : "column"} alignItems="center" justifyContent="center">
                    <Stack width="50%" minWidth="300px" alignItems="center" my={5} mx={2}>
                        <img src={DireitoPrevidenciario} style={{ minWidth: "250px", maxWidth: "500px" }} width="80%" alt="" />
                        <Stack my={2} width="50%" borderBottom="1px solid #f59f36"></Stack>
                        <Typography fontFamily="Cinzel" fontWeight="600" width={isTablet ? "240px" : "150px"} textAlign="center" lineHeight={1} fontSize={isTablet ? 24 : 18} my={1}>Direito Previdenciário</Typography>
                        <Button
                            sx={{
                                mt: 2,
                                border: '1px solid #f59f36',
                                padding: "8px 16px",
                                bgcolor: "#f59f36",
                                color: "#fff",
                                borderRadius: "12px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                '&:hover': {
                                    color: "#f59f36"
                                }
                            }}>Saiba mais</Button>
                    </Stack>
                    <Stack width="50%" minWidth="300px" alignItems="center" my={5} mx={2}>
                        <img src={DireitoTributario} style={{ minWidth: "250px", maxWidth: "500px" }} width="80%" alt="" />
                        <Stack my={2} width="50%" borderBottom="1px solid #f59f36"></Stack>
                        <Typography fontFamily="Cinzel" fontWeight="600" width={isTablet ? "240px" : "150px"} textAlign="center" lineHeight={1} fontSize={isTablet ? 24 : 18} my={1}>Direito Tributário</Typography>
                        <Button
                            sx={{
                                mt: 2,
                                border: '1px solid #f59f36',
                                padding: "8px 16px",
                                bgcolor: "#f59f36",
                                color: "#fff",
                                borderRadius: "12px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                '&:hover': {
                                    color: "#f59f36"
                                }
                            }}>Saiba mais</Button>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                p={isTablet ? "1rem 2rem" : ""}
                sx={{
                    backgroundImage: `url(${BgOrange})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                }}>
                <Stack
                    width="250px">
                    <img
                        src={LogoLisiaWhite}
                        alt="Logo Lisia Bocchese Advocacia - Branco" />
                    <Stack
                        direction="row-reverse">
                        <Typography
                            fontFamily="Cinzel"
                            color="#b9a559"
                            fontSize="22px"
                            fontWeight="500"
                            sx={{
                                bgcolor: "#fff",
                                padding: "2px 22px",
                                borderRadius: "16px 0 16px 0"
                            }}
                        >Em números</Typography>
                    </Stack>
                </Stack>

                <Stack
                    p={isTablet ? "3rem 0" : "3rem 0"}
                    direction={isTablet ? "row" : "column"}
                    justifyContent={isTablet ? "space-around" : "center"}
                    alignItems="center"
                >
                    <Stack height="210px" width="300px" justifyContent="space-between" alignItems="center" mt={isTablet ? "" : 5}>
                        <Stack alignItems="center" height="70px">
                            <Typography
                                color="#f6f6f6"
                                fontSize="50px"
                                lineHeight="40px"
                                fontFamily="Cinzel"
                                fontWeight="500"
                            >82</Typography>
                            <Typography
                                color="#f6f6f6"
                                fontWeight="600"
                            >Parceiros</Typography>
                        </Stack>
                        <Stack
                            width="80%"
                            sx={{ border: "1px solid #fff" }}>
                        </Stack>
                        <Stack
                            height="100px">
                            <Typography
                                color="#f6f6f6"
                                textAlign="center"
                                lineHeight="18px"
                            >Advogados, assistentes jurídicos, administradores, contadores, economistas e especialistas vindos de instituições importantes em todo o mundo.</Typography>
                        </Stack>
                    </Stack>
                    <Stack height="210px" width="300px" justifyContent="space-between" alignItems="center" my={isTablet ? "" : 5}>
                        <Stack alignItems="center" height="70px">
                            <Typography
                                color="#f6f6f6"
                                fontSize="50px"
                                lineHeight="40px"
                                fontFamily="Cinzel"
                                fontWeight="500"
                            >28</Typography>
                            <Typography
                                color="#f6f6f6"
                                fontWeight="600"
                            >Locais de Atendimento</Typography>
                        </Stack>
                        <Stack
                            width="80%"
                            sx={{ border: "1px solid #fff" }}>
                        </Stack>
                        <Stack
                            height="100px">
                            <Typography
                                color="#f6f6f6"
                                textAlign="center"
                                lineHeight="18px"
                            >Atendimento presencial nas maiores cidades do país.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width="300px" height="210px" justifyContent="space-between" alignItems="center">
                        <Stack alignItems="center" height="70px">
                            <Typography
                                color="#f6f6f6"
                                fontSize="50px"
                                lineHeight="40px"
                                fontFamily="Cinzel"
                                fontWeight="500"
                            >+ de 30</Typography>
                            <Typography
                                color="#f6f6f6"
                                fontWeight="600"
                            >Anos de experiência</Typography>
                        </Stack>
                        <Stack
                            width="80%"
                            sx={{ border: "1px solid #fff" }}>
                        </Stack>
                        <Stack
                            height="100px">
                            <Typography
                                color="#f6f6f6"
                                textAlign="center"
                                lineHeight="18px"
                            >+ de 30 anos de experiência, dedicados a buscar a melhor solução para seus clientes.</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}