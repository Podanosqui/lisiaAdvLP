import { IconButton, Stack, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Stack bgcolor="#193d5a" padding="1rem 0" justifyContent="space-around" mt="-1px">
                <Stack alignItems="center" my={3}>
                    <Typography textAlign="center" color="#fff">&copy; Copyright - 2024, Lisia Bocchese Advocacia.</Typography>
                    <Typography textAlign="center" color="#fff">Todos os direitos reservados</Typography>
                </Stack>
            </Stack>
            <Stack>
                <IconButton
                    onClick={(e) => handleScroll(e, 'contato')}
                    href="#contato"
                    sx={{
                        padding: "12px",
                        position: "fixed",
                        bottom: "2%",
                        right: "2%",
                        zIndex: "20",
                        bgcolor: "#193d5a",
                        color: "#fff",
                        '&:hover': {
                            bgcolor: "#fff",
                            color: "#193d5a"
                        }
                    }}>
                    <WhatsAppIcon sx={{ fontSize: 35 }} />
                </IconButton>
                <IconButton
                    onClick={(e) => handleScroll(e, 'top')}
                    href="#top"
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
                    <KeyboardArrowUpIcon sx={{ fontSize: 35 }} />
                </IconButton>
            </Stack>
        </>
    );
}