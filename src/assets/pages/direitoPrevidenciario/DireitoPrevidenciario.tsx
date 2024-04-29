import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import BGDireitoPrevidenciario from "../../images/BGDireitoPrevidenciario.png";
import BGAposentadoria from "../../images/BGAposentadoria.png";
import BGBeneficiosEAuxilios from "../../images/BGBeneficiosEAuxilios.png";
import BGAcordosInternacionais from "../../images/BGAcordosInternacionais.png";
import BGRevisoesAposentadoria from "../../images/BGRevisoesAposentadoria.png";
import IconeIdoso from "../../images/IconeIdoso.png";
import IconeBeneficios from "../../images/IconBeneficiosEAuxilios.png";
import IconeRevisoes from "../../images/IconsRevisoesAposent.png";
import IconAcordos from "../../images/IconeAcordosInternacionais.png";
import IconApIdadeUrbana from "../../images/IconApIdadeUrbana.png";
import IconApTempoContribuicao from "../../images/IconApTempoContribuicao.png";
import IconApInvalidez from "../../images/IconApPorInvalidez.png";
import IconApPDCDeficiente from "../../images/IconApPDCDeficiente.png";
import IconApPDC from "../../images/IconApPDC.png";
import IconApIdadeRural from "../../images/IconApIdadeRural.png";
import IconApIdadeHibrida from "../../images/IconApIdadeHibrida.png";
import IconAuxilioReclusao from "../../images/IconAuxilioReclusão.png";
import IconAPensaoMorte from "../../images/IconPensaoDeMorte.png";
import IconAuxilioAcidente from "../../images/IconAuxilioAcidente.png";
import IconAuxilioDoenca from "../../images/IconAuxilioDoenca.png";
import IconPrestacaoContinuada from "../../images/IconBPC.png";
import Icon25 from "../../images/Icon25.png";
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


export default function DireitoPrevidenciario() {

    const isTablet = useMediaQuery('(min-width:768px)');

    const navigate = useNavigate()

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Stack width="100%">
                <Stack
                    id="direitoPrevidenciario"
                    color="#fff"
                    p={isTablet ? "3rem 4rem" : " 3rem 1rem"}
                    sx={{
                        backgroundImage: `url(${BGDireitoPrevidenciario})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                    }}>
                    <Typography
                        variant="h1"
                        textAlign="center"
                        fontFamily="Cinzel"
                        fontSize={isTablet ? "42px" : "28px"}
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
                            onClick={(e) => handleScroll(e, 'aposentadoria')}
                            href="#aposentadoria"
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
                            onClick={(e) => handleScroll(e, 'beneficionsEAuxilios')}
                            href="#beneficionsEAuxilios"
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
                            onClick={(e) => handleScroll(e, 'revisoesAposentadoria')}
                            href="#revisoesAposentadoria"
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
                            onClick={(e) => handleScroll(e, 'acordosInternacionais')}
                            href="#acordosInternacionais"
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

                {/* Section Aposentadoria */}
                <Stack
                    id="aposentadoria"
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
                            fontSize={isTablet ? "42px" : "28px"}
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
                                <img width="100%" src={IconApIdadeUrbana} alt="Ícone Aposentadoria por idade urbana" />
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
                                    onClick={(e) => handleScroll(e, 'idadeUrbana')}
                                    href="#idadeUrbana"
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
                                <img width="100%" src={IconApTempoContribuicao} alt="Ícone Aposentadoria por tempo de contribuição" />
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
                                    onClick={(e) => handleScroll(e, 'tempoContribuição')}
                                    href="#tempoContribuição"
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
                                <img width="100%" src={IconApInvalidez} alt="Ícone Aposentadoria por Invalidez" />
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
                                    onClick={(e) => handleScroll(e, 'invalidez')}
                                    href="#invalidez"
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
                                <img width="100%" src={IconApPDCDeficiente} alt="Ícone Aposentadoria por tempo de contribuição ao deficiente (PCD)" />
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
                                    onClick={(e) => handleScroll(e, 'tempoContribuicaoPDC')}
                                    href="#tempoContribuicaoPDC"
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
                                <img width="100%" src={IconApPDC} alt="Ícone Aposentadoria por idade do deficiente (PCD)" />
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
                                    onClick={(e) => handleScroll(e, 'idadePDC')}
                                    href="#idadePDC"
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
                                <img width="100%" src={IconApIdadeRural} alt="Ícone Aposentadoria por idade rural" />
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
                                    onClick={(e) => handleScroll(e, 'idadeRural')}
                                    href="#idadeRural"
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
                                <img width="100%" src={IconApIdadeHibrida} alt="Ícone Aposentadoria por idade híbrida" />
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
                                    onClick={(e) => handleScroll(e, 'idadeHibrida')}
                                    href="#idadeHibrida"
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

                    <Stack my={3} p="1rem">
                        <Stack my={1}>
                            <Accordion id="idadeUrbana" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por idade urbana:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A aposentadoria por idade permite aos trabalhadores que aposentem quando atingirem uma idade mínima e tiverem 15 anos de contribuição e 180 meses de carência.
                                    </Typography>
                                    <Typography my={1}>
                                        Com a reforma da previdência, a idade mínima para homens é de 65 anos e para as mulheres é de 62 anos.
                                    </Typography>
                                    <Typography>
                                        Entretanto, se você começou a contribuir antes de 13 de novembro de 2019, pode ser que o seu caso esteja entre as regara de transição.
                                    </Typography>
                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Documento de identidade pessoal válido em com foto;
                                    </Typography>
                                    <Typography>
                                        2.	CPF (cadastro de pessoa física);
                                    </Typography>
                                    <Typography>
                                        3.	Extrato de CNIS (cadastro nacional de informação social)
                                    </Typography>
                                    <Typography>
                                        4.	CTPS (carteira de trabalho e previdência social)
                                    </Typography>
                                    <Typography>
                                        5.	Carnês de contribuição;
                                    </Typography>
                                    <Typography>
                                        6.	Outros documentos, como p. ex., rescisão de contrato de trabalho, recibos de pagamento, ficha cadastral etc.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="tempoContribuição" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por tempo de contribuição:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Também conhecida por Aposentadoria por tempo de serviço, a Aposentadoria por tempo de contribuição permite que os trabalhadores se aposentem com base no tempo de contribuição ao INSS sem atingir uma idade mínima.
                                    </Typography>
                                    <Typography my={1}>
                                        Antes da Reforma da Previdência, os homens precisavam de 35 anos de contribuição e as mulheres de 30 anos.</Typography>
                                    <Typography mb={1}>
                                        Entretanto, após 13/11/2019, as regras mudaram. A EC estabeleceu idades mínimas e novos critérios de contribuição. Só com uma análise da história previdenciária do trabalhador é possível investigar se ele se enquadra em alguma regra de transição.</Typography>
                                    <Typography>
                                        Nós podemos ajudar a entender as regras atuais e planejar a sua aposentadoria.
                                    </Typography>
                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Documento de identidade pessoal válido em com foto;
                                    </Typography>
                                    <Typography>
                                        2.	CPF (cadastro de pessoa física);
                                    </Typography>
                                    <Typography>
                                        3.	Extrato de CNIS (cadastro nacional de informação social)
                                    </Typography>
                                    <Typography>
                                        4.	CTPS (carteira de trabalho e previdência social)
                                    </Typography>
                                    <Typography>
                                        5.	Carnês de contribuição;
                                    </Typography>
                                    <Typography>
                                        6.	Outros documentos, como p. ex., rescisão de contrato de trabalho, recibos de pagamento, ficha cadastral etc.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="invalidez" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por invalidez:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Com a Reforma da Previdência em 2019, aposentadoria por invalidez passou a ser chamada de aposentadoria por incapacidade permanente.
                                    </Typography>
                                    <Typography my={1}>
                                        É um benefício concedido ao trabalhador que se encontra permanentemente incapaz de exercer qualquer trabalho e que também não possa ser reabilitado em outra profissão, de acordo com a avaliação médica.</Typography>
                                    <Typography mb={1}>
                                        Este benefício fornece uma fonte de renda vitalícia para as pessoas que não podem mais trabalhar devida a sua condição de saúde.</Typography>
                                    <Typography>
                                        Para a concessão desse benefício é preciso passar por uma perícia médica do INSS que ateste a incapacidade total e permanente para o trabalho.
                                    </Typography>
                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Laudo médico detalhado e atualizado que comprove a incapacidade permanente.
                                    </Typography>
                                    <Typography>
                                        2.	Exames médicos, relatórios, histórico e/ou prontuário e resultados de tratamentos relacionados à doença incapacitante para o trabalho.
                                    </Typography>
                                    <Typography>
                                        3.	Carteira de identidade (RG) e Cadastro de Pessoa Física (CPF)
                                    </Typography>
                                    <Typography>
                                        4.	Se for empregado, a carteira de trabalho e previdência Social (CTPS)
                                    </Typography>
                                    <Typography>
                                        5.	Documentos que possam comprovar a relação de trabalho anterior
                                    </Typography>
                                    <Typography>
                                        6.	Comprovante de residência
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="tempoContribuicaoPDC" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por Tempo de Contribuição ao Deficiente (PDC):</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A aposentadoria da pessoa com deficiência é o benefício devido ao trabalhador que comprove exerceu atividades laborais na condição de pessoa com deficiência leve, média ou grave.
                                    </Typography>
                                    <Typography my={1}>
                                        A partir da identificação do grau de deficiência é que se verifica o tempo necessário para a aposentadoria:
                                    </Typography>
                                    <Typography ml={2}>
                                        1.	no caso de deficiência grave, 25 (vinte e cinco) anos de tempo de contribuição, se homem, e 20 (vinte) anos, se mulher;
                                    </Typography>
                                    <Typography ml={2}>
                                        2.	no caso de deficiência moderada, 29 (vinte e nove) anos de tempo de contribuição, se homem, e 24 (vinte e quatro) anos, se mulher;
                                    </Typography>
                                    <Typography ml={2}>
                                        3.	no caso de deficiência leve, 33 (trinta e três) anos de tempo de contribuição, se homem, e 28 (vinte e oito) anos, se mulher.
                                    </Typography>

                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Laudo médico que ateste a deficiência, emitido pelo serviço público de Saúde ou por médico credenciado pelo INSS.
                                    </Typography>
                                    <Typography>
                                        2.	Carteira de identidade (RG) e Cadastro de Pessoa Física (CPF)
                                    </Typography>
                                    <Typography>
                                        3.	Se for empregado, a carteira de trabalho e previdência Social (CTPS) e comprovante de contribuições previdenciárias
                                    </Typography>
                                    <Typography>
                                        4.	Documentos que possam comprovar a relação de trabalho e/ou carnês de contribuição
                                    </Typography>
                                    <Typography>
                                        5.	Exames médicos e relatórios relacionados à deficiência.
                                    </Typography>
                                    <Typography>
                                        6.	Comprovante de residência
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="idadePDC" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por idade do Deficiente (PDC):</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Typography my={1}>
                                        No caso da aposentadoria por idade da pessoa com deficiência, exige-se 60 (sessenta) anos de idade, se homem, e 55 (cinquenta e cinco) anos de idade, se mulher, independentemente do grau de deficiência, desde que cumprido tempo mínimo de contribuição de 15 (quinze) anos e comprovada a existência de deficiência durante igual período.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="idadeRural" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por idade rural:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A Previdência Social considera trabalhadores rurais não só agricultores, mas também os pescadores artesãos, garimpeiros e produtores rurais. A aposentadoria rural é um benefício previdenciário destinado aos trabalhadores que não podem mais contar com a força braçal.
                                    </Typography>
                                    <Typography my={1}>
                                        Esse benefício considera os trabalhadores rurais que exerçam suas atividades em regime de economia familiar ou individual, que se dá quando o trabalho da família é indispensável à sua subsistência e desenvolvimento socioeconômico, sendo exercido em condições de mútua dependência e colaboração.
                                    </Typography>
                                    <Typography my={1}>
                                        Para ter direito a aposentadoria rural é necessário comprovar o efetivo exercício da atividade rural no período imediatamente anterior ao requerimento do benefício junto ao INSS e os requisitos são 15 anos de atividade rural, correspondentes a 180 meses de carência e idade de 55 anos para as mulheres e 60 anos para os homens.
                                    </Typography>


                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.  Autodeclaração do segurado especial é o documento mais importante e deve ser assinado pelo próprio segurado.
                                    </Typography>
                                    <Typography>
                                        2.	Os blocos de notas de produtor rural;
                                    </Typography>
                                    <Typography>
                                        3.	Declaração de aptidão ao PRONAF;
                                    </Typography>
                                    <Typography>
                                        4.	Contratos de arrendamento, parceria ou comodato;
                                    </Typography>
                                    <Typography>
                                        5.	Comprovante de cadastro no INCRA;
                                    </Typography>
                                    <Typography>
                                        6.	Comprovante de pagamento de ITR;
                                    </Typography>
                                    <Typography>
                                        7.	Histórico escolar;
                                    </Typography>
                                    <Typography>
                                        8.	Certidão de casamento;
                                    </Typography>
                                    <Typography>
                                        9.	Declaração do sindicato que represente o trabalhador;
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="idadeHibrida" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Aposentadoria por idade híbrida:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A aposentadoria por idade híbrida é uma modalidade de benefício ligado a aposentadoria por idade urbana que possibilita a soma de tempo de trabalho urbano e rural para atingir o direito à aposentadoria por idade.
                                    </Typography>
                                    <Typography my={1}>
                                        A aposentadoria por idade híbrida é uma modalidade de benefício ligado a aposentadoria por idade urbana que possibilita a soma de tempo de trabalho urbano e rural para atingir o direito à aposentadoria por idade.
                                    </Typography>

                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Carteira de identidade (RG) e Cadastro de Pessoa Física (CPF)
                                    </Typography>
                                    <Typography>
                                        2.	Certidão de casamento
                                    </Typography>
                                    <Typography>
                                        3.	Se for empregado, a carteira de trabalho e previdência Social (CTPS) e/ou carnes de contribuição para comprovação do período de trabalho urbano.
                                    </Typography>
                                    <Typography>
                                        4.	Documentos que comprovem o exercício da atividade rural, como por ex., contratos de arrendamento, documentos de associações rurais parceria ou comodato, documentos de associações rurais, notas fiscais de venda de produtos, declaração de sindicatos rurais entre outros.
                                    </Typography>
                                    <Typography>
                                        5.	Comprovante de residência rural.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Section Beneficios e auxilios */}
                <Stack
                    id="beneficionsEAuxilios"
                    width="100%"
                    alignItems="center">
                    <Stack
                        sx={{
                            backgroundImage: `url(${BGBeneficiosEAuxilios})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                        }}
                        width="100%"
                        alignItems="center">
                        <Typography
                            py="6rem"
                            textAlign="center"
                            my={2}
                            fontFamily="Cinzel"
                            color="#fff"
                            fontSize={isTablet ? "42px" : "28px"}
                        >Benefícions e Auxílios</Typography>
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
                                <img width="100%" src={IconAuxilioReclusao} alt="Ícone Auxílio-Reclusão" />
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
                                    >Auxílio-Reclusão</Typography>
                                </Stack>
                                <Button
                                    onClick={(e) => handleScroll(e, 'auxilioReclusao')}
                                    href="#auxilioReclusao"
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
                                <img width="100%" src={IconAPensaoMorte} alt="Ícone Pensão de morte" />
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
                                    >Pensão de morte</Typography>
                                </Stack>
                                <Button
                                    onClick={(e) => handleScroll(e, 'pensaoDeMorte')}
                                    href="#pensaoDeMorte"
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
                                <img width="100%" src={IconAuxilioAcidente} alt="Ícone Auxílio-Acidente" />
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
                                    >Auxílio-Acidente</Typography>
                                </Stack>
                                <Button
                                    onClick={(e) => handleScroll(e, 'auxilioAcidente')}
                                    href="#auxilioAcidente"
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
                                <img width="100%" src={IconAuxilioDoenca} alt="Ícone Auxílio Doença" />
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
                                    >Auxílio Doença</Typography>
                                </Stack>
                                <Button
                                    onClick={(e) => handleScroll(e, 'auxilioDoenca')}
                                    href="#auxilioDoenca"
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
                                <img width="100%" src={IconPrestacaoContinuada} alt="Ícone Benfício de prestação continuada (BPC/LOAS)" />
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
                                    >Benfício de prestação continuada (BPC/LOAS)</Typography>
                                </Stack>
                                <Button
                                    onClick={(e) => handleScroll(e, 'bpcloas')}
                                    href="#bpcloas"
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
                                <img width="100%" src={Icon25} alt="Ícone Adicional de 25% na aposentadoria por invalidez" />
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
                                    >Adicional de 25% na aposentadoria por invalidez</Typography>
                                </Stack>
                                <Button
                                    onClick={(e) => handleScroll(e, 'adicional25')}
                                    href="#adicional25"
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

                    <Stack my={3} p="1rem">
                        <Stack my={1}>
                            <Accordion id="auxilioReclusao" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Auxílio Reclusão:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        O auxílio-reclusão é um benefício previdenciário devido aos dependentes do segurado da Previdência Social que vier a ser preso e comprovar a condição de baixa renda.
                                    </Typography>
                                    <Typography my={1}>
                                        Este benefício sofreu importantes alterações na Reforma da Previdência de 2019 e os requisitos atuais para a concessão do benefício são:
                                    </Typography>
                                    <Stack ml={2}>
                                        <ul>
                                            <li>
                                                <Typography>qualidade de segurado do preso;</Typography>
                                            </li>
                                            <li>
                                                <Typography>carência de 24 meses de contribuições (a partir de 18/01/2019, conforme MP 871/2019, convertida na Lei 13.846/2019);</Typography>
                                            </li>
                                            <li>
                                                <Typography>estar em regime fechado;</Typography>
                                            </li>
                                            <li>
                                                <Typography>segurado preso comprovar ser de baixa renda.</Typography>
                                            </li>
                                        </ul>
                                    </Stack>
                                    <Typography my={1}>
                                        Caso o trabalhador tenha sido preso antes de 18/01/2019, os seus dependentes também têm direito ao benefício mesmo que o regime de reclusão seja o semiaberto.
                                    </Typography>
                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.  Certidão de nascimento ou casamento do dependente;
                                    </Typography>
                                    <Typography>
                                        2.	Carteira de trabalho e Previdência Social (CTPS) do segurado;
                                    </Typography>
                                    <Typography>
                                        3.	Sentença condenatória
                                    </Typography>
                                    <Typography>
                                        4.	Declaração da autoridade carcerária para comprovar a permanência da prisão do segurado;
                                    </Typography>
                                    <Typography>
                                        5.	CPF e RG do dependente e do segurado.
                                    </Typography>


                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="pensaoDeMorte" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Pensão de morte:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        A Pensão por Morte é um benefício previdenciário concedido aos dependentes do segurado do Instituto Nacional do Seguro Social (INSS) que vier a falecer, sendo ele aposentado ou não.
                                    </Typography>
                                    <Typography my={1}>
                                        Em caso de desaparecimento do Instituidor por mais de seis meses, é possível a concessão da pensão por morte aos dependentes de forma provisória, mediante a declaração da autoridade policial da morte presumida.
                                    </Typography>
                                    <Typography mb={1}>
                                        Quem pode pleitear a pensão por morte:
                                    </Typography>

                                    <Typography>
                                        1.	Cônjuge, a companheira, o companheiro e o filho não emancipado, de qualquer condição, menor de 21 (vinte e um) anos ou inválido ou que tenha deficiência intelectual ou mental ou deficiência grave;
                                    </Typography>
                                    <Typography>
                                        2.	Pais, desde que provem a dependência econômica em relação ao segurado falecido.
                                    </Typography>
                                    <Typography>
                                        3.	Irmãos menores de 21 anos ou de qualquer idade, desde que sejam inválidos ou apresentem alguma deficiência.
                                    </Typography>

                                    <Stack my={1} ml={2}>
                                        <Typography mb={1}>Para receber o benefício desde o óbito do Instituidor é preciso observar os seguintes prazos:</Typography>
                                        <ul>
                                            <li><Typography>Até 180 (cento e oitenta) dias após o óbito, para os filhos menores de 16 (dezesseis) anos;</Typography></li>
                                            <li><Typography>Até 90 (noventa) dias após o óbito, para os demais dependentes;</Typography></li>
                                        </ul>
                                    </Stack>

                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.  Certidão de óbito ou documento que comprove a morte presumida do segurado instituidor;
                                    </Typography>
                                    <Typography>
                                        2.  Certidão de óbito ou documento que comprove a morte presumida do segurado instituidor;
                                    </Typography>
                                    <Typography>
                                        3.  Documento que comprove a condição de dependente do requerente para com o segurado falecido, tais como certidão de casamento, certidão de nascimento, decisão judicial e demais documentos conforme o caso.
                                    </Typography>
                                    <Typography mt={1}>
                                        Como a união estável deve ser comprovada, alguns documentos podem auxiliar na prova desta condição. São eles:
                                    </Typography>
                                    <Stack ml={2}>
                                        <ul>
                                            <li>
                                                <Typography>Certidão de nascimento de filho em comum;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Comprovante de casamento religioso;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Declaração do imposto de renda do segurado, em que conste o requerente como dependente;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Prova de mesmo domicílio, que são contas em nome do casal no mesmo endereço;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Conta bancária conjunta;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Planos de saúde onde consta interessado como dependente do segurado;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Apólice de seguro;</Typography>
                                            </li>
                                            <li>
                                                <Typography>E a própria certidão de óbito do segurado onde conste o interessado como declarante do óbito.</Typography>
                                            </li>
                                            <li>
                                                <Typography>Associações em clubes sociais, esportivos, de lazer e assemelhados.</Typography>
                                            </li>
                                            <li>
                                                <Typography>Procuração outorgada entre os companheiros;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Fotos, vídeos e publicações em redes sociais;</Typography>
                                            </li>
                                        </ul>
                                    </Stack>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="auxilioAcidente" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Auxílio acidente:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        O auxílio-acidente é uma indenização destinada ao segurado que possui redução da capacidade laborativa em razão de tipo de acidente (de qualquer natureza).
                                    </Typography>
                                    <Typography my={1}>
                                        É possível receber auxílio-acidente e salário, sendo devido até a véspera da aposentadoria, ou até o óbito do seu titular.
                                    </Typography>
                                    <Typography mb={1}>
                                        Este benefício só pode ser concedido a quatro modalidade de contribuintes, são eles:
                                    </Typography>
                                    <Stack ml={2}>
                                        <ul>
                                            <li>
                                                <Typography>Empregado;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Empregado doméstico;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Trabalhador avulso;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Segurado especial.</Typography>
                                            </li>
                                        </ul>
                                    </Stack>
                                    <Typography my={1}>O contribuinte individual (profissional autônomo), o facultativo aquele que contribui para Previdência, mas não tem atividade laborativa, não tem direito ao auxílio-acidente.
                                    </Typography>
                                    <Stack my={1} ml={2}>
                                        <Typography>Os requisitos para acesso ao benefício de auxílio-acidente são:</Typography>
                                        <ul>
                                            <li>
                                                <Typography>Ocorrência de acidente de qualquer natureza;</Typography>
                                            </li>
                                            <li>
                                                <Typography>
                                                    Redução da capacidade para o trabalho, atestada por laudo médico que determine a natureza e gravidade das sequelas decorrentes do acidente;
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography>Nexo causal entre o acidente e a redução da capacidade;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Qualidade de segurado na data do acidente.</Typography>
                                            </li>
                                        </ul>
                                    </Stack>
                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Documentos de identificação, como carteira de identidade (RG) e cadastro de pessoa física (CPF).
                                    </Typography>
                                    <Typography>
                                        2.	Carteira de trabalho (CTPS) e comprovantes de contribuições previdenciárias.
                                    </Typography>
                                    <Typography>
                                        3.	Laudo médico detalhado que comprove a existência das sequelas permanentes e sua relação com o acidente de trabalho.
                                    </Typography>
                                    <Typography>
                                        4.	Exames médicos e relatórios médicos relacionados às lesões e às limitações resultantes.
                                    </Typography>
                                    <Typography>
                                        5.	Documentos que comprovem o vínculo empregatício ou a situação de trabalho, se aplicável.
                                    </Typography>
                                    <Typography>
                                        6.	Outros documentos médicos ou legais relevantes para o caso, conforme solicitado pelo INSS durante o processo de solicitação.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="auxilioDoenca" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Auxílio doença</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        O auxílio-doença previdenciário, também chamado por Benefício por Incapacidade Temporária é um benefício destinado a quem sofreu uma doença ou um acidente que não tenha relação com o trabalho e se encontra temporariamente incapacitado de exercer as suas atividades laborativas.
                                    </Typography>
                                    <Typography my={1}>
                                        É importante que no laudo médico detalhe a condição de saúde que levou à incapacidade temporária do trabalhador e estabeleça um prognóstico sobre a duração do afastamento.
                                    </Typography>
                                    <Typography>
                                        O auxílio-doença mensal corresponde a 91% do salário de benefício. Para ter direito ao benefício, o Contribuinte deve reunir os seguintes requisitos:
                                    </Typography>
                                    <Stack ml={2}>
                                        <ul>
                                            <li>
                                                <Typography>Possuir qualidade de Segurado;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Possuir qualidade de Segurado;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Estar incapacitado temporariamente para o trabalho ou para as suas atividades habituais em decorrência da doença.</Typography>
                                            </li>
                                        </ul>
                                    </Stack>

                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Documentos de identificação, como carteira de identidade (RG) e cadastro de pessoa física (CPF).
                                    </Typography>
                                    <Typography>
                                        2.	Carteira de trabalho e Previdência Social (CTPS) e comprovantes de contribuições previdenciárias.
                                    </Typography>
                                    <Typography>
                                        3.	Laudo médico detalhado que ateste a incapacidade temporária para o trabalho e indique a duração prevista do afastamento.
                                    </Typography>
                                    <Typography>
                                        4.	Exames médicos, relatórios médicos e a comprovação do tratamento da doença ou lesão.
                                    </Typography>
                                    <Typography>
                                        5.	Documentos que comprovem o vínculo empregatício ou a situação de trabalho, se aplicável.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="bpcloas" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Benefício de Prestação Continuada (BPC/LOAS):</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        O Benefício Assistencial (ou Benefício de Prestação Continuada – BPC), também chamado de LOAS, é o benefício pago pelo INSS que visa garantir um salário-mínimo mensal para pessoas que não possuem meios econômicos de prover à própria subsistência ou de tê-la provida por sua família. Pode ser separado em dois tipos:
                                    </Typography>
                                    <Stack ml={2}>
                                        <ul>
                                            <li>
                                                <Typography>Benefício Assistencial ao Idoso: concedido para idosos com idade acima de 65 anos que vivenciam estado de pobreza/necessidade;</Typography>
                                            </li>
                                            <li>
                                                <Typography>Benefício Assistencial à Pessoa com Deficiência, que estão impossibilitadas de participar e se inserir em paridade de condições com o restante da sociedade, e que também vivenciam estado de pobreza ou necessidade econômica.</Typography>
                                            </li>
                                        </ul>
                                    </Stack>
                                    <Typography>Para a obtenção deste benefício não é preciso que a pessoa tenha contribuído para o INSS, bastando que este preencha os requisitos. </Typography>
                                    <Typography mt={1}>Entretanto, não tem direito ao 13º salário e nem a possibilidade de adicional de 25% para pessoas que necessitem de acompanhamento permanente</Typography>


                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.	Documentos de identificação, como carteira de identidade (RG) e cadastro de pessoa física (CPF).
                                    </Typography>
                                    <Typography>
                                        2.	Certidão de nascimento ou casamento.
                                    </Typography>
                                    <Typography>
                                        3.	Laudo médico ou avaliação da deficiência.
                                    </Typography>
                                    <Typography>
                                        4.	Comprovante de residência.
                                    </Typography>
                                    <Typography textTransform='uppercase'>
                                        5.	CADUNICO
                                    </Typography>
                                    <Typography>
                                        6.	Documentos que comprovem a situação de vulnerabilidade social, como p. ex., declaração de renda e outros documentos solicitados pelo INSS.
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>

                        <Stack my={1}>
                            <Accordion id="adicional25" sx={{ border: "2px solid #193d5a" }}>
                                <AccordionSummary
                                    expandIcon={<ArrowDropDownIcon sx={{ color: "#193d5a" }} />} >
                                    <Typography fontWeight="700" fontFamily="Cinzel" color="#193d5a">Adicional de 25% na Aposentadoria por Invalidez:</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        O Aposentado por invalidez que comprovar a necessidade da assistência permanente de outra pessoa para realizar as atividades do dia a dia, tem direito ao um acréscimo de 25% no valor da sua aposentadoria.
                                    </Typography>
                                    <Typography my={1}>
                                        A chamada “grande invalidez” é o único caso em que um Segurado pode receber acima do teto da previdência.
                                    </Typography>

                                    <Typography mt={2} mb={1} fontWeight="bold">
                                        Documentos necessários
                                    </Typography>
                                    <Typography>
                                        1.  Laudo médico detalhado e atualizado que comporve a incapacidade permanente e a necessidade de assistência permanente de outra pessoa ou não possuir condições de efetuar as atividades diárias.
                                    </Typography>
                                    <Typography>
                                        2.  Carteira de identidade (RG) e cadastro de pessoa física (CPF)
                                    </Typography>
                                    <Typography>
                                        3.  Comprovante de residência
                                    </Typography>

                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Section Revisões da Aposentadoria */}
                <Stack
                    id="revisoesAposentadoria"
                    width="100%"
                    alignItems="center">
                    <Stack
                        sx={{
                            backgroundImage: `url(${BGRevisoesAposentadoria})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                        }}
                        width="100%"
                        alignItems="center">
                        <Typography
                            textAlign="center"
                            py="6rem"
                            my={2}
                            fontFamily="Cinzel"
                            color="#fff"
                            fontSize={isTablet ? "42px" : "28px"}
                        >Revisões de Aposentadoria</Typography>
                    </Stack>
                    <Stack py="4rem" px="2rem">
                        <Typography textAlign="center" fontSize="18px">Muitas vezes o INSS erra o valor da aposentadoria e concede o benefício com valor abaixo do devido. Assim, este trabalho se destina àqueles que desejam reavaliar e, se possível, corrigir o valor de sua aposentadoria.</Typography>
                        <Typography textAlign="center" fontSize="18px" my={3}>Mas atenção, pois é muito importante fazer uma avaliação prévia para averiguar se a revisão é vantajosa. Assim como o INSS erra e concede o benefício em valor menor, há casos em que ele concede o benefício com valor maior do que o devido. Nestes casos, é legítimo descontar o valor excedente de forma parcelada de até 5 anos retroativos.</Typography>
                        <Typography
                            textAlign="center"
                            my={3}
                            fontWeight="600"
                            fontFamily="Cinzel"
                            fontSize="28px" >Documentos necessários</Typography>
                        <Stack
                            alignItems="center"
                        >
                            <Stack
                                sx={{ borderRadius: "24px" }}
                                border="2px solid #193d5a"
                                p="1rem"
                            >
                                <Stack
                                    my={1}
                                    direction="row"
                                    alignItems="center">
                                    <CheckIcon fontSize={isTablet ? "large" : "medium"} sx={{ mr: 1 }} /><Typography textTransform="uppercase" fontSize={isTablet ? "20px" : "16px"}>Carteira de identidade (RG) e Cadastro de Pessoa Física (CPF)</Typography>
                                </Stack>
                                <Stack
                                    my={1}
                                    direction="row"
                                    alignItems="center">
                                    <CheckIcon fontSize={isTablet ? "large" : "medium"} sx={{ mr: 1 }} /><Typography textTransform="uppercase" fontSize={isTablet ? "20px" : "16px"}>Carta de concessão do benefício</Typography>
                                </Stack>
                                <Stack
                                    my={1}
                                    direction="row"
                                    alignItems="center">
                                    <CheckIcon fontSize={isTablet ? "large" : "medium"} sx={{ mr: 1 }} /><Typography textTransform="uppercase" fontSize={isTablet ? "20px" : "16px"}>Processo administrativo</Typography>
                                </Stack>
                                <Stack
                                    my={1}
                                    direction="row"
                                    alignItems="center">
                                    <CheckIcon fontSize={isTablet ? "large" : "medium"} sx={{ mr: 1 }} /><Typography textTransform="uppercase" fontSize={isTablet ? "20px" : "16px"}>Carnês de recolhimento e carteira de trabalho (CTPS)</Typography>
                                </Stack>
                                <Stack
                                    my={1}
                                    direction="row"
                                    alignItems="center">
                                    <CheckIcon fontSize={isTablet ? "large" : "medium"} sx={{ mr: 1 }} /><Typography textTransform="uppercase" fontSize={isTablet ? "20px" : "16px"}>Outros documentos a depender do tipo de revisão</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>


                {/* Section Acordos Intenacionais */}
                <Stack
                    id="acordosInternacionais"
                    width="100%"
                    alignItems="center">
                    <Stack
                        sx={{
                            backgroundImage: `url(${BGAcordosInternacionais})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center bottom',
                        }}
                        width="100%"
                        alignItems="center">
                        <Typography
                            py="6rem"
                            my={2}
                            fontFamily="Cinzel"
                            textAlign="center"
                            color="#fff"
                            fontSize={isTablet ? "42px" : "28px"}
                        >Acordos Internacionais</Typography>
                    </Stack>
                    <Stack py="4rem" px="2rem">
                        <Typography textAlign="center" fontSize="22px">O trabalhador brasileiro que migra para outro país de forma temporária ou definitiva pode continuar vinculado e computar esse tempo para a sua aposentadoria.</Typography>
                        <Typography textAlign="center" fontSize="22px" my={3}>Dependendo da situação, esse trabalhador poderá se aposentar no país de migração e usufruir das duas aposentadorias.</Typography>
                        <Typography textAlign="center" fontSize="22px">Todas as hipóteses dependem de uma análise individualizada do caso.</Typography>
                    </Stack>
                </Stack>

                <Stack>

                    <IconButton
                        onClick={(e) => handleScroll(e, 'direitoPrevidenciario')}
                        href="#direitoPrevidenciario"
                        sx={{
                            padding: "12px",
                            position: "fixed",
                            bottom: "2%",
                            right: "2%",
                            zIndex: "20",
                            bgcolor: "#193d5a",
                            color: "#fff",
                            '&:hover': {
                                color: "#193d5a",
                                bgcolor: "#fff"
                            }
                        }}>
                        <KeyboardArrowUpIcon
                            sx={{
                                fontSize: 35
                            }} />
                    </IconButton>
                    <IconButton
                        onClick={() => navigate('/home')}
                        sx={{
                            padding: "12px",
                            position: "fixed",
                            bottom: "2%",
                            left: "2%",
                            zIndex: "20",
                            bgcolor: "#193d5a",
                            color: "#fff",
                            '&:hover': {
                                color: "#193d5a",
                                bgcolor: "#fff"
                            }
                        }}>
                        <KeyboardReturnIcon sx={{ fontSize: 35 }} />
                    </IconButton>
                </Stack>
            </Stack>
        </>
    );
}