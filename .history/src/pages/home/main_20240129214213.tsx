import { Button, Container, Grid, Typography } from "@mui/material";
import logo from "./assets/logo2.png"

export default function Home() {
    return (
        <Container style={{ margin: 0, padding: 0 }}>
            <Grid container display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh', margin: 0 }}>
                <Grid container item direction="column" alignItems="center" xs={12} md={8} style={{ margin: 0 }}>
                    <Typography variant="h3" fontWeight={700}>
                        Bem vindo ao portal da Átomo!
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                        Escolha uma das opções abaixo para continuar
                    </Typography>
                    <Grid container item alignItems="center" spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained">Portal de atendimento</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Gestão de Clientes</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item direction="row" alignItems="center" xs={6} md={4} style={{ margin: 0, background: '#f0f0f0', height: '100vh', width: '100%' }}>
                    <img src={logo} alt="Logo da Átomo" height={300} />
                </Grid>
            </Grid>
        </Container>
    )
}
