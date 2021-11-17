import { useState } from 'react';
import useFetch from './useFetch';
import LaunchList from "./LaunchList";

const SearchParams = () => {

    const [flight_year, setFlight_year] = useState("");

    const { error, isPending, data: launches } = useFetch(`https://api.spacexdata.com/v3/launches?filter&launch_year=${flight_year}`)

    return (


        <div className="home">
            <div className="search-params">
                <form>
                    <label htmlFor="flight_year">
                        <input type="text" id="flight_year" value={flight_year} placeholder="Enter year: " onChange={(e) => setFlight_year(e.target.value)} />
                    </label>
                </form>


            </div>


            {error && <div>{error}</div>}
            {isPending && <div className="loading">Loading...</div>}
            {launches && <LaunchList launches={launches} />}
        </div>



    );
}

export default SearchParams
