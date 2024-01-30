import { Button, Container, Grid, Typography } from "@mui/material";
import logo from "./assets/logo2.png"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container style={{ margin: 0, padding: 0 }}>
            <Grid container display="flex" justifyContent="space-around" alignItems="center" style={{ height: '100vh', margin: 0 }}>
                <Grid container item direction="column" alignItems="center" xs={12} md={8} style={{ margin: 0 }}>
                    <Typography variant="h3" fontWeight={700}>
                        Bem vindo ao portal da Átomo!
                    </Typography>
                    <Typography variant="body2" fontWeight={500} marginTop={1}>
                        Escolha uma das opções abaixo para continuar
                    </Typography>
                    <Grid container item alignItems="center" spacing={2} justifyContent="center" marginTop={3}>
                        <Grid item>
                            <Link to="/atendimento">
                                <Button variant="contained">Portal de atendimento</Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/clientes">
                                <Button variant="contained">Gestão de Clientes</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="row" alignItems="center" md={4} style={{ margin: 0, background: '#f0f0f0', height: '100vh', width: '100%' }}>
                    <img src={logo} alt="Logo da Átomo" style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    )
}
