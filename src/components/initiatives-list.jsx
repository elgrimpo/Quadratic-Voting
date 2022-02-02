import React, {useState} from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Grid, Box, IconButton, Fab, Button} from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReactMarkdown from 'react-markdown'
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles'


const InitiativesList = (props) => {
    const theme = useTheme();

    return (
        <div style={{backgroundColor: theme.palette.background.default}}>
            <img
            src={props.currentGroup.image}
            style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                }} />

            <Box sx={{ 
                flexGrow: 1,
                padding: '20px',
                }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
                    {props.initiatives.map((initiative) => (
                        <Grid item>
                            <Card sx={{ maxWidth: 300 }} style={{paddingBottom: 10}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={initiative.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {initiative.title}
                                    </Typography>
                                    <Typography>
                                        {initiative.description}                    
                                    </Typography>
                                </CardContent>
                                <CardActions style={{display:'flex', justifyContent:'center'}}>
                                    <Button variant="outlined" startIcon={<ThumbUpOffAltIcon />}>
                                        Vote
                                    </Button>
                                    
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Fab color='primary' style={{position:'fixed', bottom: 40, right: 40}}>
            <AddIcon/>
            </Fab>
        </div>
    )
}

export default InitiativesList
