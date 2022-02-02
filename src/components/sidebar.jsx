import React from 'react'
import {Typography, Stack, Link, Divider, Avatar} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles'


const Sidebar = (props) => {
    const theme = useTheme();
    const owner = props.users.filter(user => (
        user.id === props.currentGroup.owner))

    return (
        <div >
            <Stack spacing={2}>
                <Typography variant="h5" >
                    {props.currentGroup.title}
                </Typography>
                <Typography>
                    {props.currentGroup.description}
                </Typography>
                <Divider />
                <Link href="#" underline="hover" > 
                    <LanguageIcon style={{marginRight: 8, verticalAlign: 'bottom'}}/>
                    {'Website'}
                </Link>
                <Link href="#" underline="hover" > 
                    <TwitterIcon style={{marginRight: 8, verticalAlign: 'bottom'}}/>
                    {'Twitter'}
                </Link>
                <Link href="#" underline="hover" > 
                    <InstagramIcon style={{marginRight: 8, verticalAlign: 'bottom'}}/>
                    {'Instagram'}
                </Link>
                <Divider />
                <Typography variant="h7" >
                    Group admin
                </Typography>
                <Avatar
                    style={{border: `2px solid ${theme.palette.primary.light}`}}
                    alt="Remy Sharp"
                    src={owner[0].image}
                    sx={{ width: 48, height: 48 }}
                />
            </Stack>
        </div>
    )
}

export default Sidebar