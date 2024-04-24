import { Button, Stack, Typography } from "@mui/material";
import BGDireitoPrevidenciario from "../../images/BGDireitoPrevidenciario.png";
import BGAposentadoria from "../../images/BGAposentadoria.png";
import IconeIdoso from "../../images/IconeIdoso.png";
import IconeBeneficios from "../../images/IconBeneficiosEAuxilios.png";
import IconeRevisoes from "../../images/IconsRevisoesAposent.png";
import IconAcordos from "../../images/IconeAcordosInternacionais.png";


export default function DireitoPrevidenciario() {
    return (
        <>
            <Stack width="100%">
                <Stack
                    color="#fff"
                    p="3rem 4rem"
                    sx={{
                        backgroundImage: `url(${BGDireitoPrevidenciario})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                    }}>
                    <Typography
                        variant="h1"
                        textAlign="center"
                        fontFamily="Cinzel"
                        fontSize="42px"
                        mb={3}>Direito previdenciário</Typography>
                    <Typography
                        my={2}
                        textAlign="center"
                        fontSize="18px">O Planejamento Previdenciário trata-se de uma análise individualizada da vida contributiva do Segurado para que ele possa receber o maior valor de aposentadoria no menor espaço de tempo.
                    </Typography>

                    <Typography
                        textAlign="center"
                        fontSize="18px">
                        Este trabalho minimiza os erros, proporcionando conforto e qualidade de vida àqueles que desejam ter uma aposentadoria sem surpresas e percalços.</Typography>
                </Stack>

                <Stack
                    p="3rem 2rem 7rem 2rem"
                    direction="row"
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                    gap={4}>
                    <Stack
                        width="250px"
                        alignItems="center"
                    >
                        <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                        <Stack
                            my={2}
                            width="80%"
                            borderTop="1px solid #193d5a"></Stack>
                        <Stack height="80px" alignItems="center" justifyContent="center">

                            <Typography
                                my={2}
                                fontFamily="Cinzel"
                                color="#193d5a"
                                fontSize="18px"
                                fontWeight="600"
                            >Aposentadoria</Typography>
                        </Stack>
                        <Button
                            sx={{
                                bgcolor: "#193d5a",
                                color: "#fff",
                                border: "1px solid #193d5a",
                                p: "8px 2rem",
                                '&:hover': {
                                    color: "#193d5a"
                                }
                            }}>Saiba Mais</Button>
                    </Stack>

                    <Stack
                        width="250px"
                        alignItems="center"
                    >
                        <img width="100%" src={IconeBeneficios} alt="Ícone Aposentadoria" />
                        <Stack
                            my={2}
                            width="80%"
                            borderTop="1px solid #193d5a"></Stack>
                        <Stack height="80px" alignItems="center" justifyContent="center">
                            <Typography
                                textAlign="center"
                                my={2}
                                fontFamily="Cinzel"
                                color="#193d5a"
                                fontSize="18px"
                                fontWeight="600"
                            >Benefícios e Auxílios</Typography>
                        </Stack>
                        <Button
                            sx={{
                                bgcolor: "#193d5a",
                                color: "#fff",
                                border: "1px solid #193d5a",
                                p: "8px 2rem",
                                '&:hover': {
                                    color: "#193d5a"
                                }
                            }}>Saiba Mais</Button>
                    </Stack>

                    <Stack
                        width="250px"
                        alignItems="center"
                    >
                        <img width="100%" src={IconeRevisoes} alt="Ícone Aposentadoria" />
                        <Stack
                            my={2}
                            width="80%"
                            borderTop="1px solid #193d5a"></Stack>
                        <Stack height="80px" alignItems="center" justifyContent="center">
                            <Typography
                                textAlign="center"
                                my={2}
                                fontFamily="Cinzel"
                                color="#193d5a"
                                fontSize="18px"
                                fontWeight="600"
                            >Revisões de Aposentadoria</Typography>
                        </Stack>
                        <Button
                            sx={{
                                bgcolor: "#193d5a",
                                color: "#fff",
                                border: "1px solid #193d5a",
                                p: "8px 2rem",
                                '&:hover': {
                                    color: "#193d5a"
                                }
                            }}>Saiba Mais</Button>
                    </Stack>

                    <Stack
                        width="250px"
                        alignItems="center"
                    >
                        <img width="100%" src={IconAcordos} alt="Ícone Aposentadoria" />
                        <Stack
                            my={2}
                            width="80%"
                            borderTop="1px solid #193d5a"></Stack>
                        <Stack height="80px" alignItems="center" justifyContent="center">
                            <Typography
                                textAlign="center"
                                my={2}
                                fontFamily="Cinzel"
                                color="#193d5a"
                                fontSize="18px"
                                fontWeight="600"
                            >Acordos Internacionais</Typography>
                        </Stack>
                        <Button
                            sx={{
                                bgcolor: "#193d5a",
                                color: "#fff",
                                border: "1px solid #193d5a",
                                p: "8px 2rem",
                                '&:hover': {
                                    color: "#193d5a"
                                }
                            }}>Saiba Mais</Button>
                    </Stack>
                </Stack>

                <Stack
                    width="100%"
                    alignItems="center">
                    <Stack
                        sx={{
                            backgroundImage: `url(${BGAposentadoria})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                        }}
                        width="100%"
                        alignItems="center">
                        <Typography
                            py="6rem"
                            my={2}
                            fontFamily="Cinzel"
                            color="#fff"
                            fontSize="38px"
                        >Aposentadoria</Typography>
                    </Stack>
                    <Stack
                        width="100%"
                        alignItems="center">
                        <Stack>
                            <Typography
                                textAlign="center"
                                pt="1rem"
                                mt={2}
                                fontWeight="600"
                                fontFamily="Cinzel"
                                color="#193d5a"
                                fontSize="38px"
                            >Nossos Serviços</Typography>
                            <Typography
                                textAlign="center"
                                color="#193d5a"
                                fontSize="32px"
                            >Clique e sabia mais</Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="space-evenly"
                            flexWrap="wrap"
                            gap={4}
                            my={4}>
                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por idade urbana</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>

                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por tempo de contribuição</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>

                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por invalidez</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>

                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por tempo de contribuição ao deficiente (PCD)</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>

                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por idade do deficiente (PCD)</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>

                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por idade rural</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>

                            <Stack
                                width="250px"
                                alignItems="center"
                            >
                                <img width="100%" src={IconeIdoso} alt="Ícone Aposentadoria" />
                                <Stack
                                    my={2}
                                    width="80%"
                                    borderTop="1px solid #193d5a"></Stack>
                                <Stack height="100px" alignItems="center" justifyContent="center">

                                    <Typography
                                        my={2}
                                        fontFamily="Cinzel"
                                        color="#193d5a"
                                        fontSize="18px"
                                        fontWeight="600"
                                        textAlign="center"
                                    >Aposentadoria por idade híbrida</Typography>
                                </Stack>
                                <Button
                                    sx={{
                                        bgcolor: "#193d5a",
                                        color: "#fff",
                                        border: "1px solid #193d5a",
                                        p: "8px 2rem",
                                        '&:hover': {
                                            color: "#193d5a"
                                        }
                                    }}>Saiba Mais</Button>
                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}