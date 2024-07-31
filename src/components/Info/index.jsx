import { TextField, FormControl, Container, Typography, Button } from '@mui/material';

export default function Info({ handleBack, handleNext }) {
    return (
        <Container className='step-container step-2'>
            <FormControl className='form'>
                <Typography className='user-step-info'>Provide your personal info</Typography>
                <TextField id="name" label="Name" variant="standard" required />
                <TextField id="email" label="Email" variant="standard" type='email' required />
            </FormControl>
            <Container className='actions step-2'>
                <Button onClick={handleBack}>Previous</Button>
                <Button onClick={handleNext}>Next</Button>
            </Container>
        </Container>
    )
}