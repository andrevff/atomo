import { Container, Grid, Typography } from "@mui/material";

export default function Menu() {
    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Typography variant="h3" fontWeight={700}>
                        Bem vindo ao portal da Átomo!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}