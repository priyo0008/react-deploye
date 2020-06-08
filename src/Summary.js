import React from "react"; 

class Summary extends React.Component {

    render() {
        const { summary, currentDate } = this.props;
        var nf = new Intl.NumberFormat();
          
        return (
            <div className="row">
                <div className="NewConfirmed">
                    <h3>New Confirmed</h3>
                    <h2>{nf.format(summary.NewConfirmed)
                        }</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="TotalConfirmed">
                    <h3>Total Confirmed</h3>
                    <h2>{nf.format(summary.TotalConfirmed)
                         }</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="NewDeaths">
                <h3>New Deaths</h3>
                    <h2>{nf.format(summary.NewDeaths)
                        }</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="TotalDeaths">
                <h3>New Recovered</h3>
                    <h2>{nf.format(summary.TotalDeaths)
                        }</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className="TotalRecovered">
                <h3>Total Recovered</h3>
                    <h2>{nf.format(summary.TotalRecovered)
                        }</h2>
                    <h4>{new Date(currentDate).toDateString()}</h4>
                </div>
            </div>

        )
    }

}
export default Summary;