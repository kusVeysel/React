import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FaceIcon from '@mui/icons-material/Face';

function MUItextField() {
    return (
        <div>
            <div>
                <TextField label="variant-filled" variant='filled' />
                <TextField label="variant-outlined" variant='outlined' />
                <TextField label="variant-standard" variant='standard' />
                <hr />
            </div>
            <div>
                <TextField label="helperText" helperText="Şifrenizi kimseye söylemeeyiniz" />
                <hr />
            </div>
            <div>
                <TextField label="disabled" disabled />
                <TextField label="readonly" value="veysel" slotProps={{ readOnly: true }} />
                <hr />
            </div>
            <div>
                <TextField
                    variant="outlined"
                    label="İsminizi Giriniz"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaceIcon/>
                                </InputAdornment>
                            ),
                        },
                    }}
                    />
                <TextField
                    variant="outlined"
                    label="İsminizi Giriniz"
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <FaceIcon/>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default MUItextField