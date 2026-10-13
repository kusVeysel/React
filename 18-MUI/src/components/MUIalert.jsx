import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { AlertTitle } from '@mui/material';

function MUIalert() {
    return (
        <div>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">This is a success Alert.</Alert>
                <Alert severity="info">This is an info Alert.</Alert>
                <Alert severity="warning">This is a warning Alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>
                <Alert severity='success'>
                    <AlertTitle>Başarılı</AlertTitle>
                    Ekleme işlemi başarılı
                </Alert>
            </Stack>


            <hr />
        </div>
    )
}

export default MUIalert