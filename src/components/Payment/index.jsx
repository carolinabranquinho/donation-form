import { TextField, FormControl, Container, Button } from '@mui/material';

export default function Payment({ handleBack }) {
    return (
        <Container className='step-container step-3'>
            <FormControl className='form'>
                <TextField id="card-name" label="Cardholder Name" variant="standard" required />
                <TextField id="card-number" label="Card number" variant="standard" type='number' required />
                <TextField id="exp-date" label="Exp Date" variant="standard" type='date' required />
                <TextField id="cvv" label="CVV" variant="standard" type='password' required />
            </FormControl>
            <Container className='actions step-3'>
                <Button onClick={handleBack}>Previous</Button>
                <Button >Send</Button>
            </Container>
        </Container>
    )
}