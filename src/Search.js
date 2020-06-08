import React from "react";
import axios from "axios";
import Summary from "./Summary";
import Countries from "./Countries";
import Header from "./Header"
import horsegif from "./horsegif.gif";

class Search extends React.Component {

    state = {
        countries: [],
        global: [],
        currentdate: null,
        loading: true
    }

   async  componentDidMount() {
        const res = await axios.get('https://corona.lmao.ninja/v2/countries'); 
        console.log(res);
        this.setState({ countries: res.data.Countries });
        this.setState({ global: res.data.Global });
        this.setState({ currentdate: res.data.Date }); 
        this.setState({ loading: false });
        
    } 
    render() {
        if (this.state.loading) {
            return <h2>
            <img src={horsegif} className="img" alt="Loading..." width="auto"></img>
            </h2>
        }
        return (
          <>
          </>
        )
    }
}
export default Search;

//           axios.get("https://corona.imao.ninja/all"),
//           axios.get("https://corona.lmao.ninja/v2/countries")
