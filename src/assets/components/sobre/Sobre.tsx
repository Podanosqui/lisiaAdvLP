import { Stack, Typography, useMediaQuery } from "@mui/material";
import FotoLisiaDesktop from "../../images/LisiaBoccheseDesktopPlusName.png";
import FotoLisiaMobile from "../../images/FotoPerfilLisia.png";

export default function Sobre() {

    const isTablet = useMediaQuery('(min-width:900px)');
    const isMobile = useMediaQuery('(max-width:525px)');

    return (
        <>
            <Stack
                width="100%"
                id="quemSomos"
                direction="row"
                py={7}
            >
                {isTablet &&
                    <Stack width="40%">
                        <Stack borderLeft="5px solid #193D5A" pl={2} ml={8}>
                            <Typography
                                color="#193D5A"
                                fontFamily="Cinzel"
                                fontSize="28px"
                                fontWeight="600"
                            >Quem somos</Typography>

                        </Stack>
                        <img
                            src={FotoLisiaDesktop}
                            alt="Lisia Bocchese Foto Desktop"
                            style={{
                                maxWidth: "600px"
                            }} />
                    </Stack>
                }
                <Stack width={isTablet ? "60%" : "100%"} px={4}>
                    <Stack direction={isMobile ? "column" : "row"} justifyContent="space-between" alignItems="center">
                        <Stack>
                            <Stack
                                alignItems="center"
                                width="220px"
                                bgcolor="#fff"
                                color="#193D5A"
                                borderRadius="16px 0 16px 0"
                                padding="4px"
                                mb="-10px"
                                zIndex="2"
                                border="1px solid #193D5A"
                            >
                                <Typography
                                    textTransform="uppercase"
                                    fontWeight="bold"
                                >Titular do escritório</Typography>
                            </Stack>
                            <Stack
                                alignItems="center"
                                width="290px"
                                bgcolor="#193D5A"
                                padding="10px 8px 8px 8px"
                                borderRadius="24px 0 24px 0"
                            >
                                <Typography
                                    fontSize="22px"
                                    fontFamily="Cinzel"
                                    fontWeight="600"
                                    color="#fff"
                                >Lisia Turra Bocchese</Typography>
                            </Stack>
                        </Stack>
                        {!isTablet &&
                            <Stack>
                                <img src={FotoLisiaMobile} style={isMobile ? { marginTop: "1rem" } : {}} width="200px" alt="Foto Lisia Mobile" />
                            </Stack>
                        }
                    </Stack>
                    <Stack>
                        <Typography fontSize={isTablet ? "18px" : "14px"} textAlign="justify" mt={3}>
                            Advogada inscrita na OAB/RJ sob o nº 136091
                            Graduada em Direito pela PUC/RS – Pontifícia Universidade Católica do Rio Grande do Sul é mestre pela Universidade de Berlim – Alemanha, especialista em Processo Civil e em Direito Previdenciário. Exerceu docência na ULBRA – Universidade Luterana do Brasil unidade de Canoas/RS e CUB – Centro Universitário de Brasília, atuou na UNESCO – Organização das Nações Unidas para a Educação, a Ciência e a Cultura e na INB – Indústrias Nucleares do Brasil S.A. no Rio de Janeiro/RJ.
                        </Typography>

                        <Typography fontSize={isTablet ? "18px" : "14px"} textAlign="justify" my={2}>
                            Membro da Rede Nacional de Advogados – RNA, composta por 25 escritórios de advocacia distribuídos pelos Estados da Federação e que possibilita a atuação nacional presencial, inclusive em outras áreas do Direito.
                        </Typography>

                        <Typography fontSize={isTablet ? "18px" : ""} textAlign="justify" mb={3}>
                            Somos uma equipe altamente treinada e especializada em Direito Previdenciário e Recuperação de tributos, com atendimento personalizado, em que os clientes pode optar por contatos presenciais, por vídeo chamada, ligação ou até WhatsApp.
                        </Typography>
                        <Typography fontSize={isTablet ? "22px" : "14px"} textAlign="justify" mb={3} fontFamily="Cinzel" fontWeight="600" color="#193D5A">
                            Seja muito bem-vindo a este espaço, minha missão é te ajudar!
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>
        </>
    );
}