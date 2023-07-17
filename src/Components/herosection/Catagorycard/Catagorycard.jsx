import React from 'react'
import './Catagorycard.css'
const Catagorycard = () => {
    return (
        <>
            <div className='catagorycard width100'>
                <div className="catagorycard-img">
                    <img src="https://cswr.hds.harvard.edu/sites/hwpi.harvard.edu/files/hds_cswr/files/varietiesspiritualexperience_16-9-ratio2.jpg?m=1669134373" alt="product catagory" height={'120px'} className='catagoryImg' />
                </div>
                <div className="catagory-details">
                    <h2>catagory</h2>
                    <div className="text-container">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia repellendus ratione quisquam nisi et deserunt tempore veniam dolor enim beatae ad, quis consequuntur ipsa, fugiat voluptate. Et repellat dignissimos corrupti!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catagorycard