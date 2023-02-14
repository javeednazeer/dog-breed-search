import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

var BreedResults = (props) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
                {props.puppies.map(element => (
                    <Grid item xs={3}>
                        <Item >
                            <Card sx={{ maxWidth: 345 }}>
                                {props.isLoading ? <CircularProgress color="primary" /> :
                                    <CardMedia component="img" height="325" width="118" image={element.url} alt={element.name} />}
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div" fontWeight={'bold'}>
                                        {element.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <i>Life Span:</i> {element.lifeSpan}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <i>Height Imperial:</i> {element.height.imperial}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <i>Height Metric:</i> {element.height.metric}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BreedResults;