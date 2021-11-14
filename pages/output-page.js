import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Button, Card, CardContent, Grid, Paper } from '@mui/material';
import Logo from '../src/Logo';
import { useRouter } from 'next/dist/client/router';

export default function InputPage() {
    const [risk, setRisk] = React.useState('00.0');
    const [minCost, setMinCost] = React.useState('0.00');
    const [maxCost, setMaxCost] = React.useState('0.00');
    const [rarity, setRarity] = React.useState('0');
    const [microtransactions, setMicrotransactions] = React.useState('0');
    const [accountAge, setAccountAge] = React.useState('0');
    const [bg, setBg] = React.useState('#ffffff');
    const router = useRouter();

    const backButton = () => {
        router.push('/input-page');
    };

    React.useEffect(() => {
        if (!router.query.data) return;
        console.log(router.query.data);
        const data = JSON.parse(
            '{"' +
                decodeURI(router.query.data)
                    .replace(/"/g, '\\"')
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"') +
                '"}'
        );
        console.log(data);
        setRisk(Number(data.risk).toFixed(1));
        setMinCost(Number(data.minCost).toFixed(2));
        setMaxCost(Number(data.maxCost).toFixed(2));
        setRarity(data.rarity);
        setMicrotransactions(data.microtransactions);
        setAccountAge(data.accountAge);
        if (data.risk < 30) setBg('#b5f78f');
        else if (data.risk < 50) setBg('#f7ee8f');
        else if (data.risk < 70) setBg('#f7c18f');
        else setBg('#f78f8f');
    }, [router.query.data]);

    return (
        <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
            <Card
                sx={{
                    minWidth: 254,
                    padding: '2rem',
                }}
            >
                <CardContent>
                    <Logo
                        sx={{
                            minWidth: '3rem',
                            minHeight: '3rem',
                        }}
                    />
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            paddingTop: '2rem',
                            paddingBottom: '4rem',
                            color: 'black',
                            fontFamily: 'Roboto',
                            fontWeight: '900',
                            fontSize: '1.65rem',
                            width: 'fit-content',
                        }}
                    >
                        Digital Asset Insurance Analysis
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: (theme) => theme.spacing(1),
                                    textAlign: 'center',
                                    color: (theme) => theme.palette.text.secondary,
                                    backgroundColor: bg,
                                }}
                            >
                                <Typography variant="h1" component="h3" sx={{ height: '7rem' }}>
                                    {risk}
                                </Typography>
                                <Typography variant="p" component="h3" sx={{ color: '#aaa' }}>
                                    Risk
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: (theme) => theme.spacing(1),
                                    textAlign: 'center',
                                    color: (theme) => theme.palette.text.secondary,
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h3"
                                    sx={{ fontSize: '3rem', height: '7rem' }}
                                >
                                    {minCost} -<br />{maxCost}
                                </Typography>
                                <Typography variant="p" component="h3" sx={{ color: '#aaa' }}>
                                    $/Month
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Card elevation={3} sx={{ marginTop: '0.5rem' }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{ color: 'black', paddingTop: '8px' }}
                            >
                                Rarity of Items: {rarity}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card elevation={3} sx={{ marginTop: '0.5rem' }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{ color: 'black', paddingTop: '8px' }}
                            >
                                Microtransactions: ${microtransactions}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card elevation={3} sx={{ marginTop: '0.5rem' }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{ color: 'black', paddingTop: '8px' }}
                            >
                                Account Age: {accountAge}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                marginTop: '4rem',
                                minWidth: '15rem',
                                borderRadius: 1000,
                            }}
                            onClick={backButton}
                        >
                            Back
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
