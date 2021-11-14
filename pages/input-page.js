import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import Logo from '../src/Logo';
import { useRouter } from 'next/dist/client/router';

export default function InputPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [type, setType] = React.useState(null);
    const [summoner, setSummoner] = React.useState('');
    const [buttonOn, setButtonOn] = React.useState(false);
    const router = useRouter();

    const handleChange = (event) => {
        setType(event.target.value);
    };

    React.useEffect(() => {
        setButtonOn(name !== '' && email !== '' && summoner !== '');
    }, [name, email, summoner]);

    const submitButton = () => {
        router.push('/output-page');
    }

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
                            paddingBottom: '1rem',
                            color: 'black',
                            fontFamily: 'Roboto',
                            fontWeight: '900',
                            fontSize: '1.65rem',
                            width: 'fit-content',
                        }}
                    >
                        User and Digital Asset Input
                    </Typography>
                    <Card elevation={3} sx={{ marginBottom: '2rem', marginTop: '1rem' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Client Information
                            </Typography>
                            <TextField
                                label="NAME"
                                variant="standard"
                                fullWidth
                                sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                                InputLabelProps={{
                                    sx: { fontWeight: 700, color: '#bbb', fontSize: '0.9rem' },
                                }}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <TextField
                                label="EMAIL"
                                variant="standard"
                                fullWidth
                                sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                                InputLabelProps={{
                                    sx: { fontWeight: 700, color: '#bbb', fontSize: '0.9rem' },
                                }}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </CardContent>
                    </Card>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Digital Asset Information
                            </Typography>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="asset-type-label">Asset Type</InputLabel>
                                <Select
                                    labelId="asset-type-label"
                                    id="asset-type-select"
                                    value={type}
                                    onChange={handleChange}
                                    label="Asset Type"
                                >
                                    <MenuItem value="image">Image File (png, jpg, etc)</MenuItem>
                                    <MenuItem value="video">Video File (mov, mp4, etc)</MenuItem>
                                    <MenuItem value="league">League of Legends Account</MenuItem>
                                    <MenuItem value="twitch">Twitch Account</MenuItem>
                                </Select>
                            </FormControl>
                            <Box sx={{ padding: '0 0.5rem' }}>
                                {type === 'league' ? (
                                    <TextField
                                        label="SUMMONER NAME"
                                        variant="standard"
                                        fullWidth
                                        sx={{ marginTop: '1rem', marginBottom: '0.5rem' }}
                                        InputLabelProps={{
                                            sx: {
                                                fontWeight: 700,
                                                color: '#bbb',
                                                fontSize: '0.9rem',
                                            },
                                        }}
                                        onChange={(e) => {
                                            setSummoner(e.target.value);
                                        }}
                                    />
                                ) : null}
                            </Box>
                        </CardContent>
                    </Card>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            sx={{
                                color: 'white',
                                marginTop: '2rem',
                                minWidth: '15rem',
                                borderRadius: 1000,
                            }}
                            onClick={submitButton}
                            disabled={!buttonOn}
                        >
                            Submit
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
