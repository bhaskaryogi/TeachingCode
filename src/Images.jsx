import React from 'react'
import "./style.css"
import Data from './Data.json'
const Images = () => {
    return (
        <div>

            <div className='d-flex flex-wrap gap-5 text-light justify-content-center '>

                {
                    Data.map((e, i, arr) => {
                        return (
                            <>
                                <div className='card'>
                                    <img src={e.img} width="100%" />
                                    <i><h5>Name : {e.movieName}</h5></i>
                                    <i><h5>Actor : {e.actor}</h5></i>
                                    <em><h5>Director : {e.director}</h5></em>
                                    <em><h5>Duration : {e.duration}</h5></em>
                                    <em><h5>Genre : {e.genre}</h5></em>
                                    <em><h5>Language : {e.language}</h5></em>
                                    <em><h5>Year : {e.year}</h5></em>



                                </div>

                            </>
                        )
                    })
                }




            </div>

        </div>
    )
}

export default Images
