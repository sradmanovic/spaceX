
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import NoteCard from './NoteCard'

const LaunchList = ({ launches }) => {



    return (
        <Container>
            <Grid container spacing={3}>
                {launches.map(launch => (
                    <Grid item xs={12} md={6} lg={4} key={launch.flight_number}>
                        <NoteCard launch={launch}>{launch.title}</NoteCard>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
}

export default LaunchList;

        // <div className="frame">
        //     {launches.map(launch => (
        //         <div className="singleLaunch" key={launch.flight_number} >
        //             <div className="pic">
        //                 <img src={launch.links.mission_patch_small} alt="mission logo" />
        //             </div>
        //             <div className="body">
        //                 <h1>{launch.mission_name}</h1>
        //                 {/* <h1>{launch.launch_year}</h1> */}
        //                 <div>
        //                     <p>{launch.details}</p>

        //                 </div>
        //             </div>
        //             <div  > <Link className="details-link" to={`/${launch.flight_number}`}>
        //                 <Button sx={{
        //                     width: 200,
        //                     height: 50,
        //                     color: 'inherit',
        //                     ':hover': {
        //                         bgcolor: 'rgb(221, 218, 218, 0.8)', // theme.palette.primary.main
        //                         color: 'black',
        //                     },
        //                     border: 1.5,
        //                 }}
        //                     variant="outlined">More Details</Button>
        //             </Link>
        //             </div>
        //         </div>
        //     ))}
        // </div>


