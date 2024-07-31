import './App.css';
import { useState } from 'react';
import { TextField, InputLabel, FormControl, Select, MenuItem, Container, Typography, Button } from '@mui/material';

function App() {
  const [donationTier, setDonationTier] = useState()
  return (
    <div className="App">
      <nav className='stepper-menu'>
        
      </nav>
      <form className='form-container'>
        <Container className='step-container step-1'>
          <FormControl>
            <Typography className='user-step-info'>Please choose the donation tier</Typography>
            <InputLabel id="donation-tier">Donation tier</InputLabel>
            <Select
              labelId="donation-tier"
              id="donation-tier-select"
              value={donationTier}
              label="Donation Tier"
              onChange={(e) => setDonationTier(e.target.value)}
            >
              <MenuItem value={1}>Tier 1</MenuItem>
              <MenuItem value={2}>Tier 2</MenuItem>
              <MenuItem value={3}>Tier 3</MenuItem>
            </Select>
            <TextField id="donation-message" label="Leave a message with your Donation"/>
          </FormControl>
          <Container className='actions step-1'>
            <Button>Next</Button>
          </Container>
        </Container>
        <Container className='step-container step-2'>
          <FormControl>
            <Typography className='user-step-info'>Provide your personal info</Typography>
            <TextField id="name" label="Name" variant="standard" required/>
            <TextField id="email" label="Email" variant="standard" type='email' required/>
          </FormControl>
          <Container className='actions step-2'>
            <Button>Previous</Button>
            <Button>Next</Button>
          </Container>
        </Container>
        <Container className='step-container step-3'>
          <FormControl>
            <TextField id="card-name" label="Cardholder Name" variant="standard" required/>
            <TextField id="card-number" label="Card number" variant="standard" type='number' required/>
            <TextField id="exp-date" label="Exp Date" variant="standard" type='date' required/>
            <TextField id="cvv" label="CVV" variant="standard" type='password' required/>
          </FormControl>
          <Container className='actions step-3'>
            <Button>Previous</Button>
            <Button>Send</Button>
          </Container>
        </Container>
      </form>

    </div>
  );
}

export default App;
