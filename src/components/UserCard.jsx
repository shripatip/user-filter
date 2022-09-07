import React from 'react'
import {Card, Typography} from "@mui/material"
const UserCard = ({details}) => {
  return (
    <Card sx={{minWidth:"80%"}}>
<Typography variant="body1" p={2}>
    {details.first_name}  {details.last_name}
</Typography>
    </Card>
  )
}

export default UserCard