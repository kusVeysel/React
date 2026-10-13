import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUItooltip() {
    return (
        <div>
            <Tooltip title="Sİlmek için tıklayınız" placement='top-end'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            <hr />
        </div>
    )
}

export default MUItooltip