import React from "react";


class Header extends React.Component {


    render() {
        return (
            <>
                <div class="header">
                    <div>
                        <nav class="navbar navbar-inverse">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="#">COVID-19 Dashboard</a>
                                </div>
                                <ul class="nav navbar-nav">
                                    <li class="active"><a href="#">Home</a></li> 
                                    <li><a href="#">Flow Diagram</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <h1>COVID-19</h1>
                    <p>Information on Coronavirus disease (COVID-19) pandemic</p>
                </div>
            </>
        )
    }
}
export default Header;