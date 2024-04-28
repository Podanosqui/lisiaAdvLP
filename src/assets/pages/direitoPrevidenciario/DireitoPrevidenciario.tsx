import { Accordion, AccordionDetails, AccordionSummary, Button, Stack, Typography, useMediaQuery } from "@mui/material";
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



export default function DireitoPrevidenciario() {

    const isTablet = useMediaQuery('(min-width:768px)');

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Stack width="100%">
                <Stack
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
            </Stack>
        </>
    );
}