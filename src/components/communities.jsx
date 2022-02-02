import React from 'react'
import {Box, Card, CardMedia, Stack, CardActionArea} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { palette } from '@mui/system';



const Communities = (props) => {
    const theme = useTheme();

    return (
        <div id='communities'>
            <Stack 
                sdirection="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}>
            
            {props.communities.map(community => (
                <Box sx={{width:64, height:64, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'8px'}} 
                style={community.id === props.currentCommunity.id ? {border: `4px solid ${theme.palette.primary.light}`} : {}}>
                    <Card sx={{ maxWidth: 50, maxHeight: 50}}>
                        <CardActionArea>
                        <CardMedia
                        component="img"
                        height="56"
                        image={community.image}/>
                        </CardActionArea>
                    </Card>
                </Box>
            ))}
            </Stack>
        </div>
    )
}

export default Communities
