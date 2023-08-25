import ChartData from "./ChartData";
import CountryData from "./CountryData";
import WorldData from "./WorldData";

const ChartAndMap = () => {
    return(
        <div className="sm:ml-0 md:ml-64">
            <h1 className="w-full h-20 bg-[#00ccff] font-medium text-white text-5xl flex justify-center items-center">Charts And Maps</h1>
            <WorldData />
            <ChartData />
            <CountryData />
        </div>
    )
}

export default ChartAndMap;