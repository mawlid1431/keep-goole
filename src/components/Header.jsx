import React from 'react'
import '../index.css'
const Header = (props) => {
    const logo = <img src='	https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png
    ' alt=' Logo ' />


    


    return (
        <div className="Header">
            {logo}
            <h2 className='header-keep'>
        Keep
      </h2> </div>
    )
}

export default Header