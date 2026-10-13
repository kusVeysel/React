import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIavatar() {
  return (
    <div>
        <Stack>
            <Avatar src='https://randomuser.me/api/portraits/men/60.jpg' sx={{width:"100px", height:"100px"}} />
            <Avatar sx={{bgcolor:"blue",width:"50px",height:"50px"}}>V</Avatar>
            <Avatar sx={{bgcolor:"red",width:"50px",height:"50px"}}>İ</Avatar>
        </Stack>

        <hr />
    </div>
  )
}

export default MUIavatar