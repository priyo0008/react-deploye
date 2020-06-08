import React from "react";
import undercon from "./undercon.png";
import Search from "./Search";
import Chart from "./Chart";


class Map extends React.Component {


    render() {
        return (
            <div>
                <h3>Comming Soon</h3>
                <img src={undercon} alt="Comming Soon" height="200px"></img>
              <Search/>
                <Chart/>
            </div>

        )
    }
}
export default Map;