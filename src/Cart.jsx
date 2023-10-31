import React, { useState } from 'react'
import "./style.css"
import ShowCart from './ShowCart'
import Data from './Data.json'

const Cart = () => {
    return (
        <>
            <div className='text-light m-5 d-flex justify-content-between flex-wrap mt-5 '>
                {
                    Data.map((e) => {
                        return (
                            <>
                                <ShowCart img={e.img} movieName={e.movieName} genre={e.genre} duration={e.duration} actor={e.actor} director={e.director} year={e.year} language={e.language} />
                            </>
                        )
                    })
                }


            </div>





        </>
    )
}

export default Cart
