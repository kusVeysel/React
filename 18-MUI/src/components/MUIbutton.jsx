import React from 'react'
import { Button } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint';

function MUIbutton() {
    return (
        <div>
            <div>
                <Button variant='text'>variant-text</Button>
                <Button variant='contained'>variant-contained</Button>
                <Button variant='outlined'>variant-outlined</Button>
            </div>
            <hr />
            <div>
                <Button color='error'>color-error</Button>
                <Button color='info'>color-info</Button>
                <Button color='inherit'>color-inherit</Button>
                <Button color='primary'>color-primary</Button>
                <Button color='secondary'>color-secondary</Button>
                <Button color='success'>color-success</Button>
                <Button color='warning'>color-warning</Button>
            </div>
            <hr />
            <div>
                <Button variant='outlined' size='small'>size-small</Button>
                <Button variant='outlined' size='medium'>size-medium</Button>
                <Button variant='outlined' size='large'>size-large</Button>
            </div>
            <hr />
            <div>
                <Button color="secondary" variant='outlined' startIcon={<ControlPointIcon />}>startIcon</Button>
                <Button color="secondary" variant='outlined' endIcon={<ControlPointIcon />}>endIcon</Button>
            </div>
            <hr />
        </div>
    )
}

export default MUIbutton