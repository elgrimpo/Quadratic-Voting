import React, { useContext } from 'react'
import { Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {DataContext} from '../contexts/data-context'


const InitiativeDetails = (props) => {
    const {currentInitiative} = useContext(DataContext)


    return (
        <div id='initiative-details'>
            <img
            src={currentInitiative.image}
            alt={currentInitiative.title}
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