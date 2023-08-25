import {useQuery} from 'react-query';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

interface DataEntry {
  keys: string;
  cases: number;
  deaths: number;
  recovered: number;
}

const ChartData = () => {

    const convertedData: DataEntry[] = [];

    // Fetcher function
    const getData = async () => {
        const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        return res.json();
    };
    // Using the hook
    const {data, error, isLoading} = useQuery('dayWiseData', getData);
    // Error and Loading states
    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div className='text-center my-5'>Loading Chart...</div>;

    
    for (const key in data.cases) {
        if (key in data.cases) {
          const entry: DataEntry = {
            keys: key,
            cases: data.cases[key],
            deaths: data.deaths[key],
            recovered: data.recovered[key],
          };
          convertedData.push(entry);
        }
    }

    return(
        <div className='flex justify-center bg-gray-50 rounded-md py-2 mx-3 my-6'>
            <LineChart width={700} height={300} data={convertedData}>
                <Line type={'monotone'} dataKey="cases" stroke='#FFCA29' strokeWidth={3}></Line>
                <Line type={'monotone'} dataKey="deaths" stroke='#F44236' strokeWidth={3}></Line>
                <Line type={'monotone'} dataKey="recovered" stroke='#2196F3' strokeWidth={3}></Line>
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey="keys" />
                <YAxis width={100} />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default ChartData;