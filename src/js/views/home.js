import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
    <div>
      <h1>Welcome Padawan! </h1>
      <h3>There is no ignorance, there is knowledge. There is no passion, there is serenity. There is no chaos, there is harmony. There is no death, there is the Force.</h3>
      <p>“THE GREATEST TEACHER FAILURE IS.” - Yoda</p>


      <Link to="/character">
					<button className="btn btn-primary">CHARACTERS</button> <br></br>
				</Link>

        <Link to="/ships">
					<button className="btn btn-primary">SHIPS</button> <br />
				</Link>

        <Link to="/planets">
					<button className="btn btn-primary">PLANETS</button>
				</Link>


    </div>

    
    
    
    
)};
