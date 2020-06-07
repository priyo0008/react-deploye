import React from "react";

class Countries extends React.Component{


    render()
    {
        const{countries} = this.props;
        var nf = new Intl.NumberFormat();
        return(
       <tr>
           <td>
              { countries.Country} 
           </td>
           <td>
               { nf.format(countries.NewConfirmed)}
           </td>
           <td>
               {nf.format(countries.TotalRecovered)}
           </td>
           <td>
               {nf.format(countries.TotalDeaths)}
           </td>
       </tr>
        )
    }
}
export default Countries;