import './App.css';
import { useState } from 'react';
import { TextField, FormControl, Select, MenuItem, Container, Typography, Button, Stepper, Step, StepLabel, Box } from '@mui/material';

const steps = ['Donation', 'Info', 'Payment'];

function App() {
  const [donationTier, setDonationTier] = useState();
  const [activeStep, setActiveStep] = useState(0);

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="App">
      <nav className='stepper-menu'>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </nav>
      <form className='form-container'>
        {activeStep === 0 && (
          <Container className='step-container step-1'>
            <FormControl className='form'>
              <Typography className='user-step-info'>Please choose the donation tier</Typography>
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
              <TextField id="donation-message" label="Leave a message with your Donation" />
            </FormControl>
            <Container className='actions step-1'>
              <Button onClick={handleNext}>Next</Button>
            </Container>
          </Container>
        )}
        {activeStep === 1 && (
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
        )}
        {activeStep === 2 && (
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
        )}
      </form>
    </div>
  );
}

export default App;
