import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const NoteCard = ({ launch }) => {
    return (

        <Card sx={{
            maxWidth: 345, height: 550, borderRadius: 5, backgroundColor: 'rgb(255, 255, 255, 0.2)', overflow: 'hidden',
            whiteSpace: 'nowrap'
        }}>
            <CardMedia
                component="img"
                height="350"
                image={launch.links.mission_patch_small}
                alt="mission logo"
                sx={{}}

            />
            <CardContent sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                padding: 5
            }}>
                <Typography gutterBottom variant="h4" component="div">
                    {launch.mission_name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    {launch.details}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }} >
                <Link className="details-link" to={`/${launch.flight_number}`}>
                    <Button size="small" variant="outlined" sx={{
                        color: 'inherit',
                        ':hover': {
                            bgcolor: 'rgb(221, 218, 218, 0.4)',
                            color: 'black',
                        }
                    }}>More Details</Button>
                </Link>
            </CardActions>
        </Card >
    );
}

export default NoteCard;