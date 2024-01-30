import { Button, Container, Grid, Typography } from "@mui/material";
import logo from "./assets/logo.png"

export default function Home() {
    return (
<Container>
    <Grid container display="flex" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid container item direction="column" alignItems="center" xs={8}>
            <Typography variant="h3" fontWeight={700}>
                Bem vindo ao portal da Átomo!
            </Typography>
            <Typography variant="body2" fontWeight={500}>
                Escolha uma das opções abaixo para continuar
            </Typography>
            <Grid container item alignItems="center" spacing={2} margin={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained">Portal de atendimento</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Gestão de Clientes</Button>
                </Grid>
            </Grid>
        </Grid>
        {/* Novo Grid para a logo e texto */}
        <Grid container item direction="row" alignItems="center" xs={4}>
            <img src={logo} alt="Logo da Átomo" style={{ marginRight: '10px' }} />
            <Typography component="div">
                <Typography component="div" style={{ marginRight: '10px' }}>Custumer Success</Typography>
            </Typography>
        </Grid>
    </Grid>
</Container>





    )
}