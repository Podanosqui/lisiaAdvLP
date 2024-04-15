import { Stack, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const Contato: React.FC = () => {
    const isTablet = useMediaQuery('(min-width:900px)'); // Chamada correta do useMediaQuery

    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Stack padding={isTablet ? "3rem 0 2rem 2rem" : "1rem"}>
                <Stack
                    direction={isTablet ? "row" : "column"}
                    justifyContent="space-between"
                >
                    <Stack width="50%" alignItems={isTablet ? "flex-start" : "center"}>
                        <Stack>
                            <Typography
                                fontSize="26px"
                                fontFamily="Cinzel"
                                fontWeight="500"
                                mb={5}
                                sx={{
                                    borderLeft: "5px solid #f59f36",
                                    pl: "5px",

                                }}
                            >Fale Conosco</Typography>
                        </Stack>
                        <Stack mb={2}>
                            <Typography>Para agendamento de atendimento presencial ou por videoconferência, entre em contato por Email, Telefone ou WhatsApp.</Typography>
                        </Stack>
                        <Stack mb={2}>
                            <Typography>Primeiro atendimento e agendamento:</Typography>
                            <Typography>Tel/WhatsApp: 5521-96646-6366</Typography>
                            <Typography>Email: contato@bocchese.adv.br</Typography>
                        </Stack>
                        <Stack mb={2}>
                            <Typography>Lisia Bocchese:</Typography>
                            <Typography>Tel/WhatsApp 52198820-4030</Typography>
                            <Typography>Email: lisia@bocchese.adv.br</Typography>
                        </Stack>
                        <Stack mb={2}>
                            <Typography>Para dúvidas, contato inicial ou envio de documentos, preencha o formulário ao lado:</Typography>
                        </Stack>
                        <Stack>
                            <Typography>Estamos online de segunda à sábado das 9h às 19h, e disponíveis 27/7 para atendimento de sua urgência.</Typography>
                        </Stack>
                    </Stack>

                    <Stack bgcolor="#f59f36" width={isTablet ? "50%" : "100%"}>
                        <Stack
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ padding: 2 }}
                        >
                            <TextField
                                required
                                fullWidth
                                id="name"
                                name="name"
                                label="Nome"
                                value={formData.name}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                name="phone"
                                label="Telefone"
                                value={formData.phone}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formData.email}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="message"
                                name="message"
                                label="Mensagem"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                sx={{ mb: 2 }}
                            />
                            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                                Enviar
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Contato;