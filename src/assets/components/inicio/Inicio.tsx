import { Button, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import LogoLisia from "../../../assets/images/LogoLisiaBocchese.png";
import BGS1 from "../../../assets/images/BGS1.png";

export default function Inicio() {

    const isTablet = useMediaQuery('(min-width:900px)');

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Stack
            width="100%"
            id="top"
            sx={{
                backgroundImage: `url(${BGS1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                filter: 'brightness(90%)'
            }}
            height={isTablet ? "90vh" : "70vh"}>
            <Stack

                width="100%"
                direction="row"
                justifyContent={isTablet ? "space-around" : "center"}
                padding="2rem 1rem 0 1rem"
            >
                <Stack>
                    <img
                        style={{ width: "250px" }}
                        src={LogoLisia}
                        alt="Logo Lisia Bocchese" />
                </Stack>
                <Stack
                    direction="row"
                    width="70%"
                    justifyContent="space-between"
                    alignItems="center"
                    display={isTablet ? "" : "none"}
                >

                    <Link
                        onClick={(e) => handleScroll(e, 'quemSomos')}
                        href="#quemSomos"
                        sx={{
                            fontFamily: "Cinzel",
                            fontWeight: "600",
                            fontSize: "18px",
                            pb: 1,
                            color: "#193D5A",
                            textDecoration: "none",
                            '&:hover': {
                                color: "#f59f36",
                                borderBottom: "1px solid #f59f36",
                                transition: ".3s ease",
                            }
                        }}
                    >Quem somos</Link>
                    <Stack height="40px" border="1px solid #193D5A" mr={1} ml={1} ></Stack>
                    <Link
                        onClick={(e) => handleScroll(e, 'atuacao')}
                        href="#atuacao"
                        sx={{
                            fontFamily: "Cinzel",
                            fontWeight: "600",
                            fontSize: "18px",
                            pb: 1,
                            color: "#193D5A",
                            textDecoration: "none",
                            '&:hover': {
                                color: "#f59f36",
                                borderBottom: "1px solid #f59f36",
                                transition: ".3s ease",
                            }
                        }}
                    >Áreas de atuação</Link>
                    <Stack height="40px" border="1px solid #193D5A" mr={1} ml={1} ></Stack>
                    <Link
                        onClick={(e) => handleScroll(e, 'contato')}
                        href="#contato"
                        sx={{
                            fontFamily: "Cinzel",
                            fontWeight: "600",
                            fontSize: "18px",
                            pb: 1,
                            color: "#000",
                            textDecoration: "none",
                            '&:hover': {
                                color: "#f59f36",
                                borderBottom: "1px solid #f59f36",
                                transition: ".3s ease",
                            }
                        }}
                    >Contato</Link>
                    <Stack height="40px" border="1px solid #193D5A" mr={1} ml={1} ></Stack>
                    <Link
                        onClick={(e) => handleScroll(e, 'ondeEstamos')}
                        href="#ondeEstamos"
                        sx={{
                            fontFamily: "Cinzel",
                            fontWeight: "600",
                            fontSize: "18px",
                            pb: 1,
                            color: "#193D5A",
                            textDecoration: "none",
                            '&:hover': {
                                color: "#f59f36",
                                borderBottom: "1px solid #f59f36",
                                transition: ".3s ease",
                            }
                        }}
                    >Onde estamos</Link>
                </Stack>
            </Stack>
            <Stack
                height="100%"
                padding={isTablet ? "6rem 3rem" : "3rem 8px"}
                direction="column-reverse"
                alignItems={isTablet ? "flex-start" : "center"}
            >

                <Button sx={isTablet ? {
                    width: "250px",
                    padding: "1rem",
                    mt: 5,
                    borderRadius: "8px",
                    bgcolor: "#193D5A",
                    color: "#fff",
                    outline: "1px solid #193D5A",
                    '&:hover': {
                        color: "#193D5A",
                        bgcolor: "#fff"
                    }
                } : {
                    width: "200px",
                    padding: "8px",
                    mt: 5,
                    bgcolor: "#193D5A",
                    color: "#fff",
                    outline: "1px solid #193D5A",
                    '&:hover': {
                        color: "#193D5A",
                        bgcolor: "#fff"
                    }
                }}>Marque uma consulta</Button>

                <Stack
                    borderLeft="8px solid #193D5A"
                    width={isTablet ? "700px" : "100%"}
                >
                    <Typography
                        fontFamily="Cinzel"
                        fontSize={isTablet ? "52px" : "24px"}
                        ml={2}
                        lineHeight={isTablet ? "50px" : "26px"}
                        fontWeight="500"
                        color="#193D5A"
                    >
                        Soluções jurídicas com técnica, dedicação e acolhimento!
                    </Typography>

                </Stack>



            </Stack>
        </Stack>
    );
}