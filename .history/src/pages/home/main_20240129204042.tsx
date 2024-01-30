import { Button, Container, Grid, Typography } from "@mui/material";

export default function Home() {
    return (
<Container>
    <Grid container display="flex" justifyContent="center" alignItems="center">
        {/* Conteúdo existente */}
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
        {/* Novo Grid para a logo */}
        <Grid container item direction="column" alignItems="center" xs={4}>
            {/* Adicione a tag da sua logo aqui, por exemplo: */}
            <img src="caminho/para/sua/logo.png" alt="Logo da Átomo" />
        </Grid>
    </Grid>
</Container>



    )
}