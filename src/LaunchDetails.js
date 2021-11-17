import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom'


const LaunchDetails = () => {

    const { id } = useParams();
    const { data: launch, error, isPending } = useFetch('https://api.spacexdata.com/v3/launches/' + id);
    const history = useHistory()

    const handleClick = () => {
        history.go(-1);
    }

    return (
        <div className="launch-details">
            { isPending && <div className="loading"> Loading... </div>}
            { error && <div> {error} </div>}
            { launch && (
                <div className="container">
                    <div className="btnContainer">
                        <button onClick={handleClick} className="backBtn"> &#x3c; Back </button>
                    </div>


                    <div className="details">

                        <img src={launch.links.mission_patch_small} alt="mission logo" />
                        <h1>{launch.mission_name}</h1>
                        {!launch.details &&
                            <p>No description available :(</p>}
                        <p>{launch.details}</p>
                        <h4>Launch date: {launch.launch_date_local}</h4>
                        <h2>Rocket name: {launch.rocket.rocket_name} </h2>
                        <h3>Rocket type: {launch.rocket.rocket_type}</h3>
                        <p>Launch site: {launch.launch_site.site_name_long}</p>
                        <p>Launch success: {launch.launch_success ? "Succesfull" : "Not Succesfull"}</p>
                    </div>


                </div>

            )}
        </div>
    );
}

export default LaunchDetails;