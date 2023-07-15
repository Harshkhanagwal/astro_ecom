import React from 'react'

const Saerchbar = () => {
    return (
        <form>
            <div className="searchBx">
                <input type="text" className='searchInput' placeholder='Search your product' />
                <button type='submit' className='searchbt mainBackground'>Search</button>
            </div>
        </form>
    )
}

export default Saerchbar