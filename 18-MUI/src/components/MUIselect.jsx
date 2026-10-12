import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';

function MUIselect() {

    const [currency, setCurrency] = useState('');

    const controlCurrency = () => {
        alert(`Seçili para birimi: ${currency}`);
    }

    return (
        <div >
            <FormControl sx={{ width: "150px" }} variant='filled'>
                <InputLabel>Para Birimi</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="TRY" >Türk Lirası</MenuItem>
                    <MenuItem value="USD" >Dolar</MenuItem>
                    <MenuItem value="EUR" >Euro</MenuItem>
                </Select>
            </FormControl>

            <TextField label="Para Birimi" select sx={{ width: "150px", marginLeft: "20px" }} onChange={(e) => setCurrency(e.target.value)} value={currency} >
                <MenuItem value="TRY">Türk Lirası</MenuItem>
                <MenuItem value="USD">Dolar</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </TextField>

            <Button variant='outlined' size='medium' color='secondary' onClick={controlCurrency} sx={{marginLeft: "20px"}}>Para Birimini Kontrol Et</Button>
            <hr />

        </div>
    )
}

export default MUIselect

//! style - sx aynıdır, mui için sx kullanılır, düz html tagları için style kullanılır.