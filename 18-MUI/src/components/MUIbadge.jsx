
import React from 'react'
import Badge from '@mui/material/Badge'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'

function MUIbadge() {
  return (
    <div>
      <Badge
        badgeContent={15}
        color="primary"
        max={9}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <AttachEmailIcon />
      </Badge>

      <hr />
    </div>
  )
}

export default MUIbadge
