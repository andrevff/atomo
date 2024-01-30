import { Button, Container, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
        <Container>
            <Grid container display="flex" justifyContent="center" direction="row">
                <Grid container item direction="column" alignItems="center">
                    <Typography variant="h3" fontWeight={700}>
                        Bem vindo ao portal da Átomo!
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                        Escolha uma das opções abaixo para continuar
                    </Typography>
                    <Grid container item alignItems="center" spacing={2}>
                        <Grid item>
                            <Button variant="contained">Portal de atendimento</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Gestão de Clientes</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        
    )
}