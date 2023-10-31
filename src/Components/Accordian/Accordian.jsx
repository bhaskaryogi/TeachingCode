import React from 'react'
import MyAccordian from './MyAccordian'
import { ApiData } from './ApiData'
const Accordian = () => {
    console.log(ApiData)
    return (
        <div>
            {
                ApiData.map((e) => {
                    console.log(e);
                    return (
                        <>
                            <MyAccordian topic={e.Topic} des={e.Des} />
                        </>
                    )
                })
            }

        </div>
    )
}

export default Accordian
