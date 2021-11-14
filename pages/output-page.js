import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Button, Card, CardContent, Grid, Paper } from '@mui/material';
import Logo from '../src/Logo';
import { useRouter } from 'next/dist/client/router';

export default function InputPage() {
    const [data, setData] = React.useState(null);
    const router = useRouter();

    const backButton = () => {
        router.push('/input-page');
    };

    React.useEffect(() => {
        if (!router.query.data) return;
        setData(JSON.parse(router.query.data));
        console.log(data);
    }, []);

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
                                }}
                            >
                                <Typography variant="h1" component="h3" sx={{ height: '7rem' }}>
                                    00
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
                                    sx={{ fontSize: '5rem', height: '6.5rem', marginTop: '0.5rem' }}
                                >
                                    00-00
                                </Typography>
                                <Typography variant="p" component="h3" sx={{ color: '#aaa' }}>
                                    $/Month
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Card elevation={3} sx={{ marginTop: '0.5rem' }}>
                        <CardContent>
                            <Typography variant="h6" component="p" sx={{ color: 'black', paddingTop: '8px' }}>Rarity of Items: 0</Typography>
                        </CardContent>
                    </Card>
                    <Card elevation={3} sx={{ marginTop: '0.5rem' }}>
                        <CardContent>
                            <Typography variant="h6" component="p" sx={{ color: 'black', paddingTop: '8px' }}>Microtransactions: $0</Typography>
                        </CardContent>
                    </Card>
                    <Card elevation={3} sx={{ marginTop: '0.5rem' }}>
                        <CardContent>
                            <Typography variant="h6" component="p" sx={{ color: 'black', paddingTop: '8px' }}>Account Age: 0</Typography>
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
