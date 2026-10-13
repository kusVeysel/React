import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIstack() {
    return (
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={10}
                divider={<Divider orientation='vertical' flexItem />}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>
            <hr />
        </div>
    )
}

export default MUIstack