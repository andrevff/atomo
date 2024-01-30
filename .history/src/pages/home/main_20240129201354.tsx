import { Button, Container, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
        <Container>
            <Grid container display="flex" justifyContent="center" direction="row">
                <Grid container item direction="column">
                    <Typography variant="h3" fontWeight={700}>
                        Bem vindo ao portal da Átomo!
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                        Escolha uma das opções abaixo para continuar
                    </Typography>
                    <Button />
                </Grid>
            </Grid>
        </Container>
    )
}