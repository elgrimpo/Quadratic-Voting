import React from 'react'
import {Card, CardMedia, Stack} from '@mui/material'
import { useTheme } from '@mui/material/styles'


const Communities = () => {
    const theme = useTheme();

    return (
        <div id='communities'>
            <Stack 
                sdirection="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}>
            <box style={{width:64, height:64, border: `4px solid ${theme.palette.primary.light}`, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8}}>
            <Card sx={{ maxWidth: 50, maxHeight: 50}}>
                <CardMedia
                    component="img"
                    height="56"
                    image="https://cdn.dribbble.com/users/2512810/screenshots/14398653/foxer-logo-design---f-letter-logo-mark_4x.jpg"
                    
                />
            </Card>
            </box>
            <box style={{width:64, height:64, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8}}>
            <Card sx={{ maxWidth: 50, maxHeight: 50 }}>
                <CardMedia
                    component="img"
                    height="56"
                    image="https://cdn.dribbble.com/users/1218981/screenshots/9895414/f-minimal_4x.jpg"
                />
            </Card>
            </box>
            <box style={{width:64, height:64, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8}}>
            <Card sx={{ maxWidth: 50, maxHeight: 50 }}>
                <CardMedia
                    component="img"
                    height="56"
                    image="https://i.pinimg.com/736x/66/ab/0b/66ab0b546f4d5136be87fbf384bb56b3.jpg"
                />
            </Card>
            </box>
            <box style={{width:64, height:64, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:8}}>
            <Card sx={{ maxWidth: 50, maxHeight: 50 }}>
                <CardMedia
                    component="img"
                    height="56"
                    image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/136285996/original/17177761adb39bacf9e5ab53f20e2841d2f63ebd/create-amazing-flat-logo-designs.jpg"
                />
            </Card>
            </box>
            </Stack>
        </div>
    )
}

export default Communities
