import React from "react";
import noImage from "../assets/noImage.png"
// import './cardStyle.css'


export default function Card(props){
    return(
        <div className="card">
              <div className="imgContainer">
                <img class="card-img-top" src={props.img?props.img:noImage} alt=""/>
                </div> 
              <div class="card-body">
                <h4 class="card-title">{props.title}</h4>
                <p>year: {props.year}</p>
                <p>Rank: {props.rank}</p>
              </div> 
        </div>
    )
}



/* <div class="card">
  <div class="card-overlay"></div>
  <div class="card-inner">YOUR<br>CONTENT<br>HERE</div>
</div>
*/