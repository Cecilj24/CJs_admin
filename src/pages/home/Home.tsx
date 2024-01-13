import "../home/home.scss"
import Box1 from "../../components/box1/Box1"
import ChartBox from "../../components/chartBox/ChartBox";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, chartBoxVisit } from "../../data";
import PieChartBox from "../../components/pieChartBox/PieChartBox";


const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <Box1 />
            </div>
            <div className="box box2"><ChartBox {...chartBoxUser} /></div>
            <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
            <div className="box box4"><PieChartBox /></div>
            <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
            <div className="box box6"><ChartBox {...chartBoxRevenue} /></div>
            <div className="box box7"> <BigChartBox /></div>
            <div className="box box8"><BarChartBox {...chartBoxConversion} /></div>
            <div className="box box9"><BarChartBox {...chartBoxVisit} /></div>

        </div>
    )
};

export default Home