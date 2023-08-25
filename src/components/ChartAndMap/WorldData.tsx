import {useQuery} from 'react-query';

const WorldData = () => {

    // Fetcher function
    const getData = async () => {
        const res = await fetch('https://disease.sh/v3/covid-19/all');
        return res.json();
    };
    // Using the hook
    const {data, error, isLoading} = useQuery('worldData', getData);
    // Error and Loading states
    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div className='text-center my-5'>Loading Data...</div>;

    return(
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-y-3 gap-x-3 mt-7 mx-3">
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-amber-700">{data.tests}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Total Tests</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-yellow-500">{data.cases}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Total Cases</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-yellow-500">{data.todayCases}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Today Cases</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-sky-500">{data.active}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Active Cases</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-green-600">{data.recovered}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Total Recovered</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-emerald-500">{data.todayRecovered}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Today Recovered</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-orange-500">{data.critical}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Critical Cases</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-red-500">{data.deaths}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Total Deaths</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-red-500">{data.todayDeaths}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Today Deaths</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-amber-600">{data.testsPerOneMillion}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Tests Per Million</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-cyan-600">{data.casesPerOneMillion}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Cases Per Million</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-sky-500">{data.activePerOneMillion}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Active Cases Per Million</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-green-500">{data.recoveredPerOneMillion}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Recovered Cases Per Million</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-orange-500">{data.criticalPerOneMillion}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Critical Cases Per Million</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-pink-800">{data.deathsPerOneMillion}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Deaths Per Million</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-blue-600">{data.population}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Total Population</p>
            </div>
            <div className="bg-slate-50 text-center rounded-md p-2">
                <p className="font-sans font-semibold text-xl text-red-700">{data.affectedCountries}</p>
                <p className="font-medium text-xs text-gray-700 pt-1">Total Affected Countries</p>
            </div>
        </div>
    )
}

export default WorldData;