import React, {useState} from 'react'
import { Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const InitiativeDetails = (props) => {



    return (
        <div id='initiative-details'>
            <img
            src={props.currentInitiative.image}
            alt={props.currentInitiative.title}
            style={{
                width: '100%',
                height: '450px',
                objectFit: 'cover',
                }} />

            <Box style={{padding:20}}>
            <Link to='/' style={{textDecoration: 'none', display: 'flex'}} >
                <ArrowBackIcon style={{marginRight: 12}}/>
                <Typography>Back to overview</Typography>
            </Link>
            </Box>
        </div>
    )
}

export default InitiativeDetails