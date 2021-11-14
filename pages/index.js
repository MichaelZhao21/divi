import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Card, CardContent, TextField } from '@mui/material';
import Logo from '../src/Logo';
import { Box } from '@mui/system';

export default function Home() {
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
                        component="h1"
                        sx={{
                            textAlign: 'center',
                            paddingTop: '2rem',
                            paddingBottom: '1rem',
                            color: 'black',
                            fontFamily: 'Roboto',
                            fontWeight: '900',
                            fontSize: '1.65rem',
                            width: 'fit-content',
                        }}
                    >
                        Digital Investment
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            fontWeight: 400,
                            fontSize: '0.9rem',
                            color: '#aaa',
                            fontWeight: 700,
                            marginBottom: '1rem',
                        }}
                    >
                        A portal that assists employees in risk analysis, pricing, and comparison of
                        digital assets.
                    </Typography>
                    <Container maxWidth="xs" sx={{ marginTop: '3rem' }}>
                        <TextField
                            label="USERNAME"
                            variant="standard"
                            fullWidth
                            InputLabelProps={{
                                sx: { fontWeight: 700, color: '#bbb', fontSize: '0.9rem' },
                            }}
                        />
                        <br />
                        <TextField
                            label="PASSWORD"
                            variant="standard"
                            type="password"
                            fullWidth
                            sx={{ marginTop: '1rem' }}
                            InputLabelProps={{
                                sx: { fontWeight: 700, color: '#bbb', fontSize: '0.9rem' },
                            }}
                        />
                        <br />
                        <Box
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                        >
                            <Button variant="contained" sx={{ color: 'white', marginTop: '2rem', minWidth: '15rem', borderRadius: 1000 }}>
                                Sign In
                            </Button>
                        </Box>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
}
