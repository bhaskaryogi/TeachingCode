import React from 'react'
import "./style.css"
const ShowCart = (props) => {
    return (
        <div>
            <div className=' btn btn-outline-dark  d-flex  flex-column justify-content-start flex-wrap my-4 ' style={{ width: "320px", borderRadius: "20px" }}>
                <img src={props.img} width="100%" />
                <i><h5>movieName : {props.movieName}</h5></i>
                <i><h5>genre : {props.genre}</h5></i>
                <i><h5>duration : {props.duration}</h5></i>
                <i><h5>actor : {props.actor}</h5></i>
                <i> <h5>director : {props.director}</h5></i>
                <i><h5>year : {props.year}</h5></i>
                <i> <h5>language : {props.language}</h5></i>


            </div>
        </div>
    )
}

export default ShowCart
