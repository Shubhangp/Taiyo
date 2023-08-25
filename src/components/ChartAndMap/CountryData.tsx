import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CountryData.css";
import {useQuery} from 'react-query';

interface CountryData {
    geoCode: [number, number];
    country: string;
    active: number;
    recovered: number;
    deaths: number;
}

interface CountryInfo {
    countryInfo: {
        lat: number;
        long: number;
    };
    country: string;
    active: number;
    recovered: number;
    deaths: number;
}

const CountryData = () => {

    // Fetcher function
    const getData = async () => {
        const res = await fetch('https://disease.sh/v3/covid-19/countries');
        return res.json();
    };
    // Using the hook
    const {data, error, isLoading} = useQuery('countryData', getData);
    // Error and Loading states
    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div className="text-center my-5">Loading Map...</div>;

    console.log(data);
    

    const convertedData: CountryData[] = data.map((countryWise: CountryInfo) => ({
        geoCode: [countryWise.countryInfo.lat, countryWise.countryInfo.long],
        country: countryWise.country,
        active: countryWise.active,
        recovered: countryWise.recovered,
        deaths: countryWise.deaths,
      })
    );

    console.log(convertedData);

    return(
        <div className="flex justify-center bg-gray-50 rounded-md mx-3 my-6">
            <MapContainer center={[20, 77]} zoom={3}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {convertedData.map((data)=>
                <Marker position={data.geoCode}  key={data.country}>
                    <Popup>
                        <div className="flex flex-col items-center">
                            <span className="font-sans font-semibold text-base">Country: {data.country}</span>
                            <span className="font-sans font-medium text-sm text-yellow-500">Total Active Cases: {data.active}</span>
                            <span className="font-sans font-medium text-sm text-green-600">Total Recovered Cases: {data.recovered}</span>
                            <span className="font-sans font-medium text-sm text-red-500">Total Deaths: {data.deaths}</span>
                        </div>
                    </Popup>
                </Marker>
            )
            }
            </MapContainer>
        </div>
    )
}

export default CountryData;