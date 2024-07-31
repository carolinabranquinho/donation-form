import './App.css';
import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import Donation from './components/Donation'
import Info from './components/Info'
import Payment from './components/Payment'

const steps = ['Donation', 'Info', 'Payment'];

function App() {
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
          <Donation handleNext={handleNext} />
        )}
        {activeStep === 1 && (
          <Info handleBack={handleBack} handleNext={handleNext} />
        )}
        {activeStep === 2 && (
          <Payment handleBack={handleBack} />
        )}
      </form>
    </div>
  );
}

export default App;
