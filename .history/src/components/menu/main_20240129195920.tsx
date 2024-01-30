import { Container, Grid, Typography } from "@mui/material";

export default function Menu() {
    return (
        <Container>
            <Grid container display="flex" justifyContent="center">
                <Grid container item>
                    <Typography variant="h3" fontWeight={700}>
                        Bem vindo ao portal da Átomo!
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                    Escolha uma das opções abaixo para continuar
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}