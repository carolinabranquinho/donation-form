import { useState } from 'react';

import { TextField, FormControl, Select, MenuItem, Container, Typography, Button } from '@mui/material';

export default function Donation({ handleNext }) {
    const [donationTier, setDonationTier] = useState();

    return (
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
    )
}