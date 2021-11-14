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
                        Digital Asset Insurance Analysis
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
