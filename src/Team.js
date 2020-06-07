import React from "react";
import priyansh from "./priyansh.jpeg";
class Team extends React.Component {

  
    render() {
       
        return (
            <div> 
     
     <div class="card">
       <img class="img-circle" src={priyansh} height="300px" />
       <h1>Priyansh</h1>
       <p class="title"></p>
       <p>priyansh0008@gmail.com</p>
       <div>
         <a className="anh" href="#"><i class="fa fa-dribbble"></i></a> 
         <a className="anh" href="twitter.com"><i class="fa fa-twitter"></i></a>  
         <a className="anh" href="linkedin.com"><i class="fa fa-linkedin"></i></a>  
         <a className="anh" href="facebook.com"><i class="fa fa-facebook"></i></a> 
       </div>
       <p><button className="buttoncls">Contact</button></p>
     </div>
         </div>
    /*<div>
        <div class="container">
	<div class="row">
        <div class="profile-header-container">   
    		<div class="profile-header-img">
                <img class="img-circle" src={priyansh} />
         
                <div class="rank-label-container">
                    <span class="label label-default rank-label">Priyansh</span>
                </div>
            </div>
            <p> </p>
        </div> 
	</div>
</div>
    </div>*/
        )
    }
}
export default Team;