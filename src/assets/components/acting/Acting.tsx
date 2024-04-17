import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import DireitoPrevidenciario from "../../images/DireitoPrevidenciarioImg.png";
import DireitoTributario from "../../images/DireitoTributarioImg.png";

export default function Acting() {

    const isTablet = useMediaQuery('(min-width:900px)');


    return (
        <>
            <Stack
                py="2rem"
                bgcolor="#193D5A">
                <Stack px={isTablet ? 7 : 0} alignItems={isTablet ? "flex-start" : "center"}>
                    <Typography
                        fontSize="26px"
                        fontFamily="Cinzel"
                        fontWeight="500"
                        color="#fff"
                        sx={{
                            borderLeft: "5px solid #fff",
                            pl: "5px",

                        }}
                    >Áreas de atuação</Typography>
                </Stack>
                <Stack direction={isTablet ? "row" : "column"} alignItems="center" justifyContent="center">
                    <Stack width="50%" minWidth="300px" alignItems="center" my={5} mx={2}>
                        <img src={DireitoPrevidenciario} style={{ minWidth: "250px", maxWidth: "500px" }} width="80%" alt="" />
                        <Stack my={2} width="50%" borderBottom="1px solid #fff"></Stack>
                        <Typography color="#fff" fontFamily="Cinzel" fontWeight="600" width={isTablet ? "240px" : "150px"} textAlign="center" lineHeight={1} fontSize={isTablet ? 24 : 18} my={1}>Direito Previdenciário</Typography>
                        <Button
                            sx={{
                                mt: 2,
                                border: '1px solid #fff',
                                padding: "8px 16px",
                                bgcolor: "#fff",
                                color: "#193D5A",
                                borderRadius: "12px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                '&:hover': {
                                    color: "#fff"
                                }
                            }}>Saiba mais</Button>
                    </Stack>
                    <Stack width="50%" minWidth="300px" alignItems="center" my={5} mx={2}>
                        <img src={DireitoTributario} style={{ minWidth: "250px", maxWidth: "500px" }} width="80%" alt="" />
                        <Stack my={2} width="50%" borderBottom="1px solid #fff"></Stack>
                        <Typography color="#fff" fontFamily="Cinzel" fontWeight="600" width={isTablet ? "240px" : "150px"} textAlign="center" lineHeight={1} fontSize={isTablet ? 24 : 18} my={1}>Direito Tributário</Typography>
                        <Button
                            sx={{
                                mt: 2,
                                border: '1px solid #fff',
                                padding: "8px 16px",
                                bgcolor: "#fff",
                                color: "#193D5A",
                                borderRadius: "12px",
                                fontWeight: "bold",
                                fontSize: "18px",
                                '&:hover': {
                                    color: "#fff"
                                }
                            }}>Saiba mais</Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}